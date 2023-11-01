import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import BugForm from "../../_components/BugForm";

const EditBugPage = async ({ params }: { params: { id: string } }) => {
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) notFound();

  return <BugForm bug={bug} />;
};

export default EditBugPage;
