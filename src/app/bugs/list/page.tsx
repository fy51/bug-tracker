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
  const bugs = await prisma.bug.findMany();

  return (
    <Flex direction="column">
      <Flex justify="between">
        <BugFilter searchParams={searchParams} />
        <Button>
          <Link href="/bugs/new">New Bug</Link>
        </Button>
      </Flex>
      <BugTable bugs={bugs} />
      <div>Pagination</div>
    </Flex>
  );
};

// export const dynamic = "force-dynamic";

export default BugsPage;
