// app/unsupported/page.tsx or pages/unsupported.tsx (depending on your routing)
export default function UnsupportedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-4">
      <h1 className="text-2xl font-semibold text-red-600">
        This web app is only available on desktop devices.
      </h1>
    </div>
  );
}
