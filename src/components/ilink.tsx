import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type ILinkProps = {
  href: string;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"a">;

const ILink: React.FC<ILinkProps> = ({
  href,
  className,
  children,
  ...props
}) => {
  return (
    <Link href={href} {...props}>
      <Button
        className={cn("p-0 m-0 inline-block h-fit w-fit", className)}
        variant="link"
      >
        {children}
      </Button>
    </Link>
  );
};

export default ILink;
