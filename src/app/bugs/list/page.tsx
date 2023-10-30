import prisma from "@/lib/db";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import BugTable from "./BugTable";

const BugsPage = async () => {
  const bugs = await prisma.bug.findMany();
  console.log(bugs);

  return (
    <Flex direction="column">
      <Flex justify="between">
        <div>BugFilter</div>
        <Button>
          <Link href="/bugs/new">New Bug</Link>
        </Button>
      </Flex>
      <BugTable bugs={bugs} />
      <div>Pagination</div>
    </Flex>
  );
};

export default BugsPage;
