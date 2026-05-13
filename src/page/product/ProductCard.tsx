"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PathName } from "@/router/path";

export interface ProductItem {
  id: string;
  name: string;
  collection: string;
  image: string;
}

interface Props {
  product: ProductItem;
  index?: number;
}

function ProductCard({ product, index = 0 }: Props) {
  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
    >
      <Link href={`${PathName.PRODUCT}/${product.id}`} className="product-card__image">
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-card__info">
        <span className="product-card__collection">{product.collection}</span>
        <Link href={`${PathName.PRODUCT}/${product.id}`}>
          <h3 className="product-card__name">{product.name}</h3>
        </Link>
      </div>
    </motion.article>
  );
}

export default ProductCard;
