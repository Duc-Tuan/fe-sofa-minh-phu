"use client";

import React from "react";

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface Props {
  categories: Category[];
  active: string;
  onChange: (id: string) => void;
}

function Filter({ categories, active, onChange }: Props) {
  return (
    <div className="product-filter">
      {categories.map((c) => (
        <button
          key={c.id}
          type="button"
          className={`product-filter__item ${active === c.id ? "is-active" : ""}`}
          onClick={() => onChange(c.id)}
        >
          <span className="product-filter__item-icon">{c.icon}</span>
          <span className="product-filter__item-name">{c.name}</span>
        </button>
      ))}
    </div>
  );
}

export default Filter;
