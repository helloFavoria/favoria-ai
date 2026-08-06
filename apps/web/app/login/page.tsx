"use client";

import { useActionState } from "react";
import Link from "next/link";
import { login } from "./actions";

const initialState = { error: "", success: "" };

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <form
        action={formAction}
        className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
      >
        <h1 className="text-3xl font-bold text-slate-900">Login</h1>

        <p className="mt-2 text-slate-600">Welcome back to Favoria AI.</p>

        {state?.error ? (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {state.error}
          </div>
        ) : null}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="mt-6 w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-slate-900"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mt-4 w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-slate-900"
          required
        />

        <button
          type="submit"
          disabled={pending}
          className="mt-6 w-full rounded-lg bg-slate-900 p-3 font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Signing in..." : "Login"}
        </button>

        <p className="mt-3 text-center text-sm text-slate-600">
          <Link
            href="/login/forgot-password"
            className="font-medium text-slate-900"
          >
            Forgot password?
          </Link>
        </p>

        <p className="mt-4 text-center text-sm text-slate-600">
          No account yet?{" "}
          <Link href="/register" className="font-medium text-slate-900">
            Create one
          </Link>
        </p>
      </form>
    </main>
  );
}
