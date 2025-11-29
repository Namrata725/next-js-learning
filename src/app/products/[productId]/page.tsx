"use client";
import React from "react";

export default function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  return <div>Product ID: {id}</div>;
}
