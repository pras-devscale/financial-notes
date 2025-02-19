"use client";

import { useActionState } from "react";
import DeleteAction from "../_actions/delete-action";
export default function FormDelete({ id }) {
  const [state, formAction, pending] = useActionState(DeleteAction, null);

  return (
    <form action={formAction} className="border-l">
      <input type="text" defaultValue={id} name="id" hidden />
      <button className="danger" disabled={pending}>
        {pending ? "Deleting..." : "Delete"}
      </button>
    </form>
  );
}
