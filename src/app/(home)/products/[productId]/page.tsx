import { Metadata } from "next";

type Props = { params: Promise<{ productId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productId = (await params).productId;
  return {
    title: `Product ${productId}`,
    description: "Product Description",
  };
}

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;

  return <div>product Details: {productId}</div>;
}
