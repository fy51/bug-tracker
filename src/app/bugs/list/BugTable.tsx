import StatusBadge from "@/components/StatusBadge";
import { Bug } from "@prisma/client";
import { Table } from "@radix-ui/themes";

const BugTable = ({ bugs }: { bugs: Bug[] }) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Bug</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {bugs.map(({ id, title, status, createdAt }) => (
          <Table.Row key={id}>
            <Table.Cell>{title}</Table.Cell>
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

export default BugTable;
