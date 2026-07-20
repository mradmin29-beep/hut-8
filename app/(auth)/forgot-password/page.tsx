export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-xl border bg-card p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Forgot Password</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your email and we&apos;ll send you a password reset link.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-md border px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-2 text-primary-foreground"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <a
            href="/login"
            className="text-primary hover:underline"
          >
            Back to Login
          </a>
        </p>
      </div>
    </main>
  );
}