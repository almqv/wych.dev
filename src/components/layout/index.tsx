import NavBinds from "@/components/binds/navbinds";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="w-full h-[calc(100vh-3.5rem)] flex justify-center overflow-x-clip">
        {children}
      </main>
      <NavBinds />
    </>
  );
};

export default Layout;
