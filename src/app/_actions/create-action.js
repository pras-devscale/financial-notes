"use server";

import { revalidatePath } from "next/cache";

export default async function CreateAction(_, formData) {
  const title = formData.get("title");
  const amount = Number(formData.get("amount"));
  const category = formData.get("category");

  await fetch("https://v1.appbackend.io/v1/rows/dtpXI4zjD1w3", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ title, amount, category }]),
  });

  revalidatePath("/");
}
