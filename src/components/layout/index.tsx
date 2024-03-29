import NavBinds from "@/components/binds/navbinds";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen flex justify-center">
        {children}
      </main>
      <NavBinds />
    </>
  );
};

export default Layout;
