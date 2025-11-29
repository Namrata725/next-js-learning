import { notFound } from "next/navigation";
import React from "react";
export default function ReviewsDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId } = React.use(params);
  const { reviewId } = React.use(params);

  if (reviewId > "50") {
    notFound();
  }
  return (
    <div>
      Product review productId={productId}
      reviewId={reviewId}
    </div>
  );
}
