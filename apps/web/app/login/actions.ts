"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { validateAuthForm } from "@/lib/auth/validation";

export type AuthActionState = {
  error?: string;
  success?: string;
};

export async function login(
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  const errors = validateAuthForm({ email, password, mode: "login" });
  if (Object.keys(errors).length > 0) {
    return { error: Object.values(errors)[0] || "Invalid form submission." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message || "Unable to sign in." };
  }

  redirect("/dashboard");
}
