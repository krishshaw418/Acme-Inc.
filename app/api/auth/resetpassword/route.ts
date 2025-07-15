import { generatePasswordResetToken } from "@/app/lib/util";
import { NextResponse, NextRequest } from "next/server";
import redis from "@/lib/redis";
import { prisma } from "@/lib/prisma";
import { Hashing } from "@/app/lib/util";
import { sendEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
    const { email } = await req.json();
    if(!email) return NextResponse.json({error: "Email required!"});
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        })
        if(!user) return NextResponse.json({error: "User not found!"});
        const resetToken = generatePasswordResetToken();
        await redis.set(user.id, resetToken, {EX: 600});
        const link = `${process.env.NEXTAUTH_URL}/api/auth/resetpassword/?user_Id=${user.id}&resetToken=${resetToken}`;
        await sendEmail(email, link);
        return NextResponse.json({message: "Mail sent!"});
    } catch (error) {
        console.log("Error: ", error);
        return NextResponse.json({error: "Server Error!"});
    }
}

export async function PUT(req: NextRequest) {
  const url = new URL(req.url);
  const user_Id = url.searchParams.get('user_Id');
  const resetToken = url.searchParams.get('resetToken');

  const { newPassword, confirmPassword } = await req.json();

  if (!user_Id || !resetToken) {
    return NextResponse.json({ error: 'Invalid reset link!' }, { status: 400 });
  }

  const storedToken = await redis.get(user_Id);
  if (!storedToken) {
    return NextResponse.json({ error: 'Reset link expired!' }, { status: 400 });
  }

  if (storedToken !== resetToken) {
    return NextResponse.json({ error: 'Invalid reset token!' }, { status: 400 });
  }

  if (!newPassword || !confirmPassword) {
    return NextResponse.json({ error: 'All fields required!' }, { status: 400 });
  }

  if (newPassword !== confirmPassword) {
    return NextResponse.json({ error: 'Passwords do not match!' }, { status: 400 });
  }

  try {
    const hashedPassword = await Hashing(newPassword);

    await prisma.user.update({
      where: { id: user_Id },
      data: { hashedPassword },
    });

    return NextResponse.json({ message: 'Password reset successful!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
