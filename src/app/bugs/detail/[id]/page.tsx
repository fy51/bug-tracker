import prisma from "@/lib/db";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import AssigneeSelect from "./AssigneeSelect";
import BugDetails from "./BugDetails";
import DeleteBugButton from "./DeleteBugButton";
import EditBugButton from "./EditBugButton";

const BugDetailPage = async ({ params }: { params: { id: string } }) => {
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="col-span-4">
        <BugDetails bug={bug} />
      </Box>
      <Box>
        <Flex direction="column" gap="3">
          <AssigneeSelect bug={bug} />
          <EditBugButton bugId={bug.id} />
          <DeleteBugButton bugId={bug.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default BugDetailPage;
