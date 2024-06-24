import {
  GitHubLogoIcon as GitHub,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { CalendarIcon } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

type NavLink = {
  label: string;
  icon: React.FC<{ className?: string }>;
  href: string;
};

const NavLinks: NavLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/almqv",
    icon: GitHub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/almqv/",
    icon: LinkedInLogoIcon,
  },
  {
    label: "X",
    href: "https://x.com/fcvprzhfgsybj",
    icon: FaXTwitter,
  },
  {
    label: "Book a meeting",
    href: "/meeting",
    icon: CalendarIcon,
  },
];

export default NavLinks;
