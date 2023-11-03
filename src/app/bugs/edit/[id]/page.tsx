import prisma from "@/lib/db";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const BugForm = dynamic(() => import("@/app/bugs/_components/BugForm"), {
  ssr: false,
  loading: () => <></>,
});

const EditBugPage = async ({ params }: { params: { id: string } }) => {
  const bug = await prisma.bug.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!bug) notFound();

  return <BugForm bug={bug} />;
};

export default EditBugPage;
