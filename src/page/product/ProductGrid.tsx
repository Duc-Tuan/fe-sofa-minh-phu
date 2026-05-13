"use client";

import React from "react";
import ProductCard, { ProductItem } from "./ProductCard";

interface Props {
  products: ProductItem[];
}

function ProductGrid({ products }: Props) {
  return (
    <div className="product-grid">
      {products.map((p, idx) => (
        <ProductCard key={p.id} product={p} index={idx} />
      ))}
    </div>
  );
}

export default ProductGrid;
