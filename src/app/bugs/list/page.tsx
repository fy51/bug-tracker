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
  searchParams: { status: Status };
}) => {
  const bugs = await prisma.bug.findMany({
    where: {
      status: searchParams.status,
    },
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
      <Pagination currentPage={1} pageSize={2} totalCount={10} />
    </Flex>
  );
};

// export const dynamic = "force-dynamic";

export default BugsPage;
