const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="prose dark:prose-dark max-w-screen-2xl w-full px-8">
    {children}
  </div>
);

export default Layout;
