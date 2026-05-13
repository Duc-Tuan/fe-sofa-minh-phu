"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  items: FaqItem[];
}

function Faq({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="product-detail__faq my-container">
      <div className="product-detail__faq-head">
        <span>HỎI & ĐÁP</span>
        <h2>CÂU HỎI THƯỜNG GẶP</h2>
      </div>
      <div className="product-detail__faq-list">
        {items.map((f, idx) => {
          const isOpen = open === idx;
          return (
            <div key={f.q} className={`product-detail__faq-item ${isOpen ? "is-open" : ""}`}>
              <button type="button" onClick={() => setOpen(isOpen ? null : idx)}>
                <span>{f.q}</span>
                <em>{isOpen ? "−" : "+"}</em>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
