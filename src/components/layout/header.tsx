import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import ThemeButton from "../themebutton";
import NavCommand from "./nav";

import Logo from "@/components/logo";
import ExternalNav from "../externalnav";

const Header = () => (
  <header className="w-full h-14 flex flex-col justify-center items-center">
    <div className="py-2 px-4 w-full max-w-prose mx-auto">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <Link
            href="/"
            className="flex flex-row items-center gap-x-2 hover:opacity-80 transition-opacity"
          >
            <h1 className="text-xl font-bold">collected sayings of an insane sane person</h1>
          </Link>
        </div>
        <div className="flex flex-row items-center space-x-8">
          {/* <ThemeButton className="w-4 h-4 hidden sm:block" /> */}
          <ExternalNav className="hidden sm:flex flex-row space-x-1" />
          <NavCommand />
        </div>
      </div>
    </div>
    {/* <Separator /> */}
  </header>
);
export default Header;
