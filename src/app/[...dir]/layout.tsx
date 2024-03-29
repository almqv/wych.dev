const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <div className="prose dark:prose-dark max-w-screen-lg">{children}</div>;

export default Layout;
