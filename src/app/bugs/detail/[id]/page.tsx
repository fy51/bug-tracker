import prisma from "@/lib/db";
import { Box, Button, Flex, Grid } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import BugDetails from "./BugDetails";

const BugDetailPage = async ({ params }: { params: { id: string } }) => {
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) notFound();

  return (
    <Grid columns="5" gap="5">
      <Box className="col-span-4">
        <BugDetails bug={bug} />
      </Box>
      <Box>
        <Flex direction="column" gap="3">
          <div>AssigneeSelect</div>
          <Button>
            <Link href={`/bugs/edit/${params.id}`}>Edit Bug</Link>
          </Button>
          <Button>Delete Bug</Button>
        </Flex>
      </Box>
    </Grid>
  );
};

export default BugDetailPage;
