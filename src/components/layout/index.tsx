import NavBinds from "@/components/binds/navbinds";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen flex items-center justify-center">
        <div className="max-w-screen-2xl w-full px-8">{children}</div>
      </main>
      <NavBinds />
    </>
  );
};

export default Layout;
