import { RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";

export default function RecentlyLunchedProducts() {
  const recentluLuchedProducts = [
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
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <SectionHeader
          title="Recently Lunched"
          icon={RocketIcon}
          description="Discover the latest products from our community

"
        />

        {recentluLuchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentluLuchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}
