import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import Link from "next/link";
import ThemeButton from "../themebutton";
import NavLinks from "../navlinks";
import NavCommand from "./nav";

const Header = () => (
  <header className="w-full h-14 flex flex-col justify-center items-center">
    <div className="py-2 px-4 md:px-8 flex flex-row justify-between w-full max-w-screen-2xl">
      <div className="flex flex-row items-center">
        <Link
          href="/"
          className="flex flex-row items-center gap-x-2 hover:opacity-80 transition-opacity"
        >
          {/* <Logo className="h-6 w-6" /> */}
          <span
            className={cn(
              "text-2xl",
              // fonts.mono.className,
            )}
          >
            Wych
          </span>
        </Link>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <ThemeButton className="w-4 h-4 hidden sm:block" />
        <NavCommand />
        <ul className="flex-row space-x-2 w-fit h-full items-center hidden sm:flex">
          {NavLinks.map((link, index) => (
            <li>
              <Link
                key={index}
                href={link.href}
                target={link.href.match("http") ? "_blank" : "_self"}
                className="flex flex-row items-center"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="transition-opacity hover:bg-transparent hover:opacity-75"
                >
                  <link.icon className="h-4 w-4" />
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Separator />
  </header>
);
export default Header;
