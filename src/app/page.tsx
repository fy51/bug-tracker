import prisma from "@/lib/db";
import { Grid } from "@radix-ui/themes";

export default async function Home() {
  const open = await prisma.bug.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.bug.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.bug.count({ where: { status: "CLOSED" } });

  return (
    <Grid columns="2">
      <div>
        <div>BugSummary</div>
        <div>BubChart</div>
      </div>
      <div>LatestBugs</div>
    </Grid>
  );
}
