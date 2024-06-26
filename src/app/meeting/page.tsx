import Link from "next/link";
import { redirect } from "next/navigation";

const SCHEDULING_URL = "https://cal.com/elias-almqvist-d33wxo";

export const metadata = {
  title: "Schedule a meeting with Elias",
  description: "Schedule a meeting with Elias Almqvist",
};

// Redirect to the external URL
const Page = () => {
  redirect(SCHEDULING_URL);

  return (
    <div className="h-full flex flex-col justify-center items-center space-y-2">
      <span className="animate-pulse text-2xl font-mono">
        Redirecting to the scheduling page...
      </span>
      <Link href={SCHEDULING_URL}>Click here if you are not redirected</Link>
    </div>
  );
};

export default Page;
