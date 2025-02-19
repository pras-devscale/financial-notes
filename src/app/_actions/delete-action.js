"use server";

import { revalidatePath } from "next/cache";

export default async function DeleteAction(_, formData) {
  const id = formData.get("id");

  await fetch("https://v1.appbackend.io/v1/rows/dtpXI4zjD1w3", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([id]),
  });

  revalidatePath("/");
}
