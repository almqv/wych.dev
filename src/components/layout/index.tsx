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
      <footer className="-mt-16 w-full h-16">
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-foreground/20 text-sm">
            &copy; {new Date().getFullYear()} Elias Almqvist. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
