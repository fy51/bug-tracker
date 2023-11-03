import prisma from "@/lib/db";
import { Grid } from "@radix-ui/themes";
import BugSummary from "./BugSummary";
import LatestBugs from "./LatestBugs";

export default async function Home() {
  const open = await prisma.bug.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.bug.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.bug.count({ where: { status: "CLOSED" } });

  return (
    <Grid columns="2">
      <div>
        <BugSummary open={open} inProgress={inProgress} closed={closed} />
        <div>BubChart</div>
      </div>
      <LatestBugs />
    </Grid>
  );
}
