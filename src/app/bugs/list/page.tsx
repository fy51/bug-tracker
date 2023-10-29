import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

const BugsPage = () => {
  return (
    <Flex direction="column">
      <Flex justify="between">
        <div>BugFilter</div>
        <Button>
          <Link href="/bugs/new">New Bug</Link>
        </Button>
      </Flex>
      <div>BugTable</div>
      <div>Pagination</div>
    </Flex>
  );
};

export default BugsPage;
