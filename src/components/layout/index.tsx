import NavBinds from "@/components/binds/navbinds";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="w-full flex justify-center">
        {children}
      </main>
      <NavBinds />
    </>
  );
};

export default Layout;
