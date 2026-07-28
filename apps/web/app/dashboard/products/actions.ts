"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/login");
  }

  const title = formData.get("title")?.toString() ?? "";
  const description = formData.get("description")?.toString() ?? "";
  const price = formData.get("price")?.toString() ?? "";
  const affiliate_url = formData.get("affiliate_url")?.toString() ?? "";
  const image_url = formData.get("image_url")?.toString() ?? "";
  const marketplace_id = formData.get("marketplace_id")?.toString() ?? "";

  const { error } = await supabase.from("products").insert([
    {
      user_id: user.id,
      title,
      description,
      price,
      affiliate_url,
      image_url,
      marketplace_id,
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}
