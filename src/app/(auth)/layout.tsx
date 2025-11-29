export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<div>
    <h2>login header</h2>
    {children}</div>);
}
