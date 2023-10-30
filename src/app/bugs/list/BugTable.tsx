import { Bug } from "@prisma/client";
import { Table } from "@radix-ui/themes";

const BugTable = ({ bugs }: { bugs: Bug[] }) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Bug</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {bugs.map((bug) => (
          <Table.Row key={bug.id}>
            <Table.Cell>{bug.title}</Table.Cell>
            <Table.Cell>{bug.status}</Table.Cell>
            <Table.Cell>{bug.createdAt.toDateString()}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default BugTable;
