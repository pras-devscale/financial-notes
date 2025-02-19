"use client";

import { useState } from "react";
import { useActionState } from "react";
import UpdateAction from "../_actions/update-action";

export default function FormUpdate({ title, amount, category, id }) {
  const [state, formAction, pending] = useActionState(UpdateAction, null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="edit" onClick={() => setIsOpen(!isOpen)}>
        Edit
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-3/4">
            <h2 className="text-xl font-bold mb-4">
              Edit Your Financial Notes
            </h2>
            <form
              action={formAction}
              onSubmit={() => setIsOpen(false)}
              className="space-y-2"
            >
              <input type="text" name="id" defaultValue={id} hidden />
              <input type="text" name="title" defaultValue={title} />
              <input type="number" name="amount" defaultValue={amount} />
              <select name="category" id="" defaultValue={category}>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
              </select>
              <div className="flex justify-start items-center space-x-2">
                <button className="primary" disabled={pending}>
                  {pending ? "Updating..." : "Update"}
                </button>
                <button onClick={() => setIsOpen(false)} className="danger">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
