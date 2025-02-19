"use client";

import { useActionState } from "react";
import CreateAction from "../_actions/create-action";

export default function FormCreate() {
  const [state, formAction, pending] = useActionState(CreateAction, null);

  return (
    <form action={formAction} className="space-y-2">
      <h1 className="text-2xl font-bold">Add Your Financial Notes</h1>
      <input type="text" name="title" placeholder="Input the title" />
      <input type="number" name="amount" placeholder="Input the amount" />
      <select name="category" id="">
        <option value="Credit">Credit</option>
        <option value="Debit">Debit</option>
      </select>
      <button className="primary" disabled={pending}>
        {pending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
