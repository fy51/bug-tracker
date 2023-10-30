"use client";

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const items: { label: string; value: Status }[] = [
  { label: "Open", value: "OPEN" },
  { label: "In progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const BugFilter = ({ searchParams }: { searchParams: { status: Status } }) => {
  const router = useRouter();

  const handleStatusChange = (status: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (status === "ALL") {
      newParams.delete("status");
    } else {
      newParams.set("status", status);
    }
    router.push(`?${newParams.toString()}`);
  };

  return (
    <Select.Root
      defaultValue={searchParams.status || "ALL"}
      onValueChange={handleStatusChange}
    >
      <Select.Trigger placeholder="Filter by status" />
      <Select.Content>
        <Select.Item value="ALL">All</Select.Item>
        <Select.Separator />
        {items.map(({ label, value }) => (
          <Select.Item key={label} value={value}>
            {label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default BugFilter;
