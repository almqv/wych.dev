import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import Nav from "./nav";
import Link from "next/link";

const Header = () => (
  <header className="w-full flex flex-col justify-center items-center">
    <div className="py-2 px-4 md:px-8 flex flex-row justify-between w-full max-w-screen-2xl">
      <Link href="/" className="flex flex-row items-center gap-x-2 hover:opacity-80 transition-opacity">
        <Logo className="h-6 w-6" />
        <span className="font-mono text-2xl hidden md:inline-block">wych.dev</span>
      </Link>
      <Nav />
    </div>
    <Separator />
  </header>
);
export default Header;
