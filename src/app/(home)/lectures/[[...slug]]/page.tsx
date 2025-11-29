export default async function Lectures({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length == 2) {
    return "hello";
  }

  if (slug?.length == 3) {
    return "hi";
  }

  console.log(slug);
  return <div>lectures</div>;
}
