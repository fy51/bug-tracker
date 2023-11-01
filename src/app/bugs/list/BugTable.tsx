import StatusBadge from "@/components/StatusBadge";
import { Bug } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import Link from "next/link";
import BugQuery from "./BugQuery";

type Props = {
  bugs: Bug[];
  searchParams: BugQuery;
};

const columns: {
  label: string;
  value: keyof Bug;
}[] = [
  { label: "Bug", value: "title" },
  { label: "Status", value: "status" },
  { label: "Created", value: "createdAt" },
];

const BugTable = ({ bugs, searchParams }: Props) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map(({ label, value }) => (
            <Table.ColumnHeaderCell key={label}>
              <Link
                href={{
                  query: {
                    ...searchParams,
                    orderBy: value,
                  },
                }}
              >
                {label}
              </Link>
              {value === searchParams.orderBy && (
                <ArrowUpIcon className="inline" />
              )}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {bugs.map(({ id, title, status, createdAt }) => (
          <Table.Row key={id}>
            <Table.Cell>
              <Link href={`/bugs/detail/${id}`}>{title}</Link>
            </Table.Cell>
            <Table.Cell>
              <StatusBadge status={status} />
            </Table.Cell>
            <Table.Cell>{createdAt.toDateString()}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export const columnNames = columns.map((column) => column.value);

export default BugTable;
