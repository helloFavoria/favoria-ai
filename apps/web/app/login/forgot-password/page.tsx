"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { validateAuthForm } from "@/lib/auth/validation";

export default function ForgotPasswordPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setErrorMessage(null);

    const errors = validateAuthForm({
      email,
      password: "",
      mode: "forgot-password",
    });
    if (Object.keys(errors).length > 0) {
      setErrorMessage(Object.values(errors)[0]);
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login/reset-password`,
    });
    setLoading(false);

    if (error) {
      setErrorMessage(error.message || "Unable to send reset email.");
      return;
    }

    setMessage("Check your inbox for the reset link.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
      >
        <h1 className="text-3xl font-bold text-slate-900">Forgot Password</h1>
        <p className="mt-2 text-sm text-slate-600">
          Enter your email and we will send a reset link.
        </p>

        {errorMessage ? (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {errorMessage}
          </div>
        ) : null}

        {message ? (
          <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
            {message}
          </div>
        ) : null}

        <input
          type="email"
          placeholder="Email"
          className="mt-6 w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-slate-900"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-slate-900 p-3 font-medium text-white transition hover:bg-slate-700 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        <p className="mt-4 text-center text-sm text-slate-600">
          <Link href="/login" className="font-medium text-slate-900">
            Back to login
          </Link>
        </p>
      </form>
    </main>
  );
}
