import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../products/product-card";

const featuredProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    tags: ["tag1", "tag11"],
    votes: 120,
    isFeatured: true,
  },

  {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
    tags: ["tag2", "tag12"],
    votes: 100,
    isFeatured: false,
  },

  {
    id: 3,
    name: "Product 3",
    description: "This is product 3",
    tags: ["tag3", "tag13"],
    votes: 120,
    isFeatured: true,
  },
];

export default function FeatureadProducts() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />

          <Button variant={"outline"} asChild className="hidden sm:flex">
            <Link href="/explore">
              View All <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
