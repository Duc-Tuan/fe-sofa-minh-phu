"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PathName } from "@/router/path";

export interface RelatedItem {
  id: string;
  name: string;
  image: string;
}

interface Props {
  items: RelatedItem[];
}

function Related({ items }: Props) {
  return (
    <section className="product-detail__related my-container">
      <div className="product-detail__related-head">
        <span>SẢN PHẨM LIÊN QUAN</span>
        <h2>CÁC SẢN PHẨM KHÁC</h2>
      </div>
      <div className="product-detail__related-grid">
        {items.map((r, idx) => (
          <motion.article
            key={r.id}
            className="product-detail__related-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <Link href={`${PathName.PRODUCT}/${r.id}`} className="product-detail__related-image">
              <img src={r.image} alt={r.name} />
            </Link>
            <h3>{r.name}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Related;
