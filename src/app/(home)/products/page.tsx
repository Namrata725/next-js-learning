import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="products/1">product-1</Link>
        </li>
        <li>
          <Link href="products/2">product-2</Link>
        </li>
        <li>
          <Link href="products/3">product-3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
