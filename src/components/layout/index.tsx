import NavBinds from "@/components/binds/navbinds";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="max-w-screen-lg md:px-8">{children}</div>
      <NavBinds />
    </>
  );
};

export default Layout;
