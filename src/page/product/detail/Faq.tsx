"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "@/assets/images/figma/home/collection-interior-1.png";

interface Item {
  q: string;
  a: string;
}

interface Props {
  items: Item[];
}

function Faq({ items }: Props) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="product-detail__faq">
      <div className="product-detail__faq-bg">
        <img src={bg.src} alt="" />
        <div className="product-detail__faq-shade" />
      </div>

      <div className="product-detail__faq-inner">
        <div className="product-detail__faq-head">
          <span>Sản phẩm</span>
          <h2>Câu hỏi thường gặp</h2>
        </div>

        <ul className="product-detail__faq-list">
          {items.map((it, idx) => {
            const open = openIdx === idx;
            return (
              <li
                key={it.q}
                className={`product-detail__faq-item ${
                  open ? "is-open" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : idx)}
                  aria-expanded={open}
                >
                  <span>{`${idx + 1}. ${it.q}`}</span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                    style={{
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s",
                    }}
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p>{it.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Faq;
