"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { validateAuthForm } from "@/lib/auth/validation";

export type RegisterActionState = {
  error?: string;
  success?: string;
};

export async function register(
  _prevState: RegisterActionState,
  formData: FormData,
): Promise<RegisterActionState> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  const errors = validateAuthForm({
    email,
    password,
    confirmPassword,
    mode: "register",
  });
  if (Object.keys(errors).length > 0) {
    return { error: Object.values(errors)[0] || "Invalid form submission." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { error: error.message || "Unable to create account." };
  }

  redirect("/login?registered=1");
}
