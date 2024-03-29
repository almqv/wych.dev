import Link from "next/link";
import { Button } from "./ui/button";

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
      <Button className={className} variant="link">
        {children}
      </Button>
    </Link>
  );
};

export default ILink;
