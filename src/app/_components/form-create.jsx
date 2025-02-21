"use client";

import { useActionState } from "react";
import CreateAction from "../_actions/create-action";
import { Button, SelectItem } from "@heroui/react";
import { Input } from "@heroui/react";
import { Select } from "@heroui/react";

export default function FormCreate() {
  const [state, formAction, pending] = useActionState(CreateAction, null);

  return (
    <form action={formAction} className="space-y-2">
      <h1 className="text-2xl font-bold">Add Your Financial Notes</h1>
      <Input
        label="Title"
        type="text"
        name="title"
        isRequired
        placeholder="Input the title"
      />
      <Input
        label="Amount"
        type="number"
        name="amount"
        isRequired
        placeholder="Input the amount"
      />
      <Select name="category" id="" isRequired label="Category">
        <SelectItem key="Credit">Credit</SelectItem>
        <SelectItem key="Debit">Debit</SelectItem>
      </Select>
      <Button type="submit" color="primary" isLoading={pending}>
        {pending ? "Saving..." : "Save"}
      </Button>
    </form>
  );
}
