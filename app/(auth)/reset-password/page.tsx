'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function ResetPasswordPage() {
    const [isValidating, setIsValidating] = useState(true);
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const userId = searchParams.get('user_Id');
    const resetToken = searchParams.get('resetToken');

    useEffect(() => {
        if (!userId || !resetToken) {
            setError('Invalid reset link. Please request a new password reset.');
            setIsValidating(false);
            return;
        }

        validateToken();
    }, [userId, resetToken]);

    const validateToken = async () => {
        try {
            const response = await fetch(`/api/auth/resetpassword?user_Id=${userId}&resetToken=${encodeURIComponent(resetToken!)}`);
            const data = await response.json();
            
            if (data.valid) {
                setIsValid(true);
            } else {
                setError(data.error || 'Invalid reset link');
            }
        } catch (error) {
            setError('Network error. Please try again.');
        } finally {
            setIsValidating(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError('');
        
        if (newPassword !== confirmPassword) {
            setSubmitError('Passwords do not match');
            return;
        }

        if (newPassword.length < 8) {
            setSubmitError('Password must be at least 8 characters long');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(`/api/auth/resetpassword?user_Id=${userId}&resetToken=${encodeURIComponent(resetToken!)}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    newPassword,
                    confirmPassword
                })
            });

            const data = await response.json();

            if (response.ok) {
                // Redirect to login page with success message
                toast.success("Password reset successful!");
                router.push('/login');
            } else {
                // toast.error(data.error || 'Failed to reset password');
                setSubmitError(data.error || 'Failed to reset password');
            }
        } catch (error) {
            setSubmitError('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isValidating) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <h2 className="text-xl font-semibold mb-2">Validating Reset Link</h2>
                    <p className="text-gray-600">Please wait while we verify your reset token...</p>
                </div>
            </div>
        );
    }

    if (!isValid) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                    <div className="text-center">
                        <div className="text-red-500 text-5xl mb-4">⚠️</div>
                        <h2 className="text-xl font-semibold mb-2 text-red-600">Invalid Reset Link</h2>
                        <p className="text-gray-600 mb-4">{error}</p>
                        <a 
                            href="/forgot-password" 
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        >
                            Request New Password Reset
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Your Password</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            minLength={8}
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            minLength={8}
                            disabled={isSubmitting}
                        />
                    </div>
                    
                    {submitError && (
                        <div className="text-red-600 text-sm mt-2">
                            {submitError}
                        </div>
                    )}
                    
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        {isSubmitting ? 'Resetting...' : 'Reset Password'}
                    </button>
                </form>
            </div>
        </div>
    );
}