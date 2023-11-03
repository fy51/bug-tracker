import dynamic from "next/dynamic";

const BugForm = dynamic(() => import("@/app/bugs/_components/BugForm"), {
  ssr: false,
  loading: () => <></>,
});

const NewBug = () => {
  return <BugForm />;
};

export default NewBug;
