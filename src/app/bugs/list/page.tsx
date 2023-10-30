import Pagination from "@/components/Pagination";
import prisma from "@/lib/db";
import { Status } from "@prisma/client";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import BugFilter from "./BugFilter";
import BugTable from "./BugTable";

const BugsPage = async ({
  searchParams,
}: {
  searchParams: { status: Status; page: number };
}) => {
  const currentPage = searchParams.page || 1;
  const pageSize = 2;

  const statuses = Object.values(Status);
  const where = statuses.includes(searchParams.status)
    ? { status: searchParams.status }
    : undefined;

  const bugs = await prisma.bug.findMany({
    where,
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  });

  const totalCount = await prisma.bug.count({
    where,
  });

  return (
    <Flex direction="column" gap="3">
      <Flex justify="between">
        <BugFilter searchParams={searchParams} />
        <Button>
          <Link href="/bugs/new">New Bug</Link>
        </Button>
      </Flex>
      <BugTable bugs={bugs} />
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalCount={totalCount}
      />
    </Flex>
  );
};

// export const dynamic = "force-dynamic";

export default BugsPage;
