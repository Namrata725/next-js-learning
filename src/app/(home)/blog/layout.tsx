export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>blog header</div>
      {children}
    </div>
  );
}
