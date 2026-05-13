"use client";

import React from "react";

interface Props {
  total: number;
  current: number;
  onChange: (page: number) => void;
}

function Pagination({ total, current, onChange }: Props) {
  const pages = Array.from({ length: total }).map((_, i) => i + 1);
  return (
    <div className="product-pagination">
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          className={`product-pagination__btn ${current === p ? "is-active" : ""}`}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        className="product-pagination__btn"
        onClick={() => onChange(Math.min(current + 1, total))}
        aria-label="next"
      >
        ›
      </button>
    </div>
  );
}

export default Pagination;
