import { notFound } from "next/navigation";

type Log = {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  content: React.ReactNode;
};

const Page = async () => {
  const post = undefined;

  if (!post) {
    return notFound();
  }

  return <h1>WIP</h1>;
};

export default Page;
