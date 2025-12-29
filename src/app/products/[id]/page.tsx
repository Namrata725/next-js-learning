import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>Product Details Page 

    product id is {id}
  </div>;
};

export default page;
