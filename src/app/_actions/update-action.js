"use server";

import API_URL from "@/constants/api-url";
import { revalidatePath } from "next/cache";

export default async function UpdateAction(_, formData) {
  const _id = formData.get("id");
  const title = formData.get("title");
  const amount = Number(formData.get("amount"));
  const category = formData.get("category");

  await fetch(API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id, title, amount, category }),
  });

  revalidatePath("/");
}
