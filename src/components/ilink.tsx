import { cn } from "@/lib/utils";
import Link from "next/link";

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
    <Link
      href={href}
      className={cn(
        "transition-colors text-accent-foreground hover:text-accent-foreground/80",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ILink;
