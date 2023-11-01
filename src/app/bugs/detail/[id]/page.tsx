import prisma from "@/lib/db";
import { Box, Button, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import BugDetails from "./BugDetails";
import EditBugButton from "./EditBugButton";

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
          <EditBugButton bugId={bug.id} />
          <Button>Delete Bug</Button>
        </Flex>
      </Box>
    </Grid>
  );
};

export default BugDetailPage;
