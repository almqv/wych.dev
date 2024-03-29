import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import Nav from "./nav";

const Header = () => (
  <header className="w-full h-16 flex flex-col justify-center items-center mb-4">
    <div className="py-4 flex flex-row justify-between w-full max-w-screen-lg">
      <div className="flex flex-row items-center gap-x-2">
        <Logo className="h-8 w-8" />
        <span className="font-mono text-2xl">wych.dev</span>
      </div>
      <Nav />
    </div>
    <Separator />
  </header>
);
export default Header;
