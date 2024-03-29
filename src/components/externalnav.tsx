import Link from "next/link";
import NavLinks from "./navlinks";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type ExternalNavProps = {
  className?: string;
};

const ExternalNav: React.FC<ExternalNavProps> = ({ className }) => (
  <ul className={cn(className)}>
    {NavLinks.map((link, index) => (
      <li key={index} className="w-fit">
        <Link
          href={link.href}
          target={link.href.match("http") ? "_blank" : "_self"}
          className="flex flex-row items-center w-fit"
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
);

export default ExternalNav;
