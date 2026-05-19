"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PathName } from "@/router/path";
import Button from "@/components/button/Button";

export interface RelatedItem {
  id: string;
  collection: string;
  name: string;
  image: string;
}

interface Props {
  items: RelatedItem[];
}

function Related({ items }: Props) {
  return (
    <section className="product-detail__related">
      <div className="product-detail__related-head">
        <div>
          <span>Sản phẩm liên quan</span>
          <h2>Các sản phẩm khác</h2>
        </div>
        {/* <Link href={PathName.PRODUCT} className="product-detail__related-more">
          <span>Xem tất cả</span>
          <svg
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M3 11L11 3M11 3H4.5M11 3v6.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link> */}
        <Button
          title="Xem tất cả"
          typeIcon="cross"
          color="white"
          handleClick={() => {}}
        />
      </div>

      <div className="product-detail__related-grid">
        {items.map((p, idx) => (
          <motion.article
            key={p.id}
            className="product-detail__related-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <Link
              href={`${PathName.PRODUCT}/${p.id}`}
              className="product-detail__related-image"
            >
              <img src={p.image} alt={p.name} />
            </Link>
            <div className="product-detail__related-body">
              <span>{p.collection}</span>
              <Link href={`${PathName.PRODUCT}/${p.id}`}>
                <h3>{p.name}</h3>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="button-mobile">
        <Button
          title="Xem tất cả"
          typeIcon="cross"
          color="white"
          handleClick={() => {}}
        />
      </div>
    </section>
  );
}

export default Related;
