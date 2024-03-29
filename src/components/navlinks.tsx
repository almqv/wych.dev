import { GitHubLogoIcon as GitHub, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaXTwitter } from "react-icons/fa6";

type NavLink = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

const IconClassname = "w-5 h-5";

const NavLinks: NavLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/almqv",
    icon: <GitHub className={IconClassname} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/almqv/",
    icon: <LinkedInLogoIcon className={IconClassname} />,
  },
  {
    label: "X",
    href: "https://x.com/fcvprzhfgsybj",
    icon: <FaXTwitter className={IconClassname} />,
  },
];

export default NavLinks;
