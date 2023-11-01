import { Box, Button, Flex, Grid } from "@radix-ui/themes";
import Link from "next/link";

const BugDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <Grid columns="5" gap="5">
      <Box className="col-span-4">BugDetail</Box>
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
