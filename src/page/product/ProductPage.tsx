"use client";
import React, { useMemo, useState } from "react";
import "@/css/product.model.css";
import imgL from "@/assets/images/figma/home/collection-living.png";
import imgB from "@/assets/images/figma/home/collection-bedroom.png";
import imgD from "@/assets/images/figma/home/collection-dining.png";
import imgI from "@/assets/images/figma/home/collection-interior.png";
import Hero from "./Hero";
import Filter, { Category } from "./Filter";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";
import { ProductItem } from "./ProductCard";

const categories: Category[] = [
  { id: "all", name: "Tất cả", icon: <CategoryDotIcon /> },
  { id: "luxury", name: "Luxury Sofa", icon: <CategoryLuxuryIcon /> },
  { id: "modern", name: "Modern Sofa", icon: <CategoryModernIcon /> },
  { id: "classic", name: "Classic Sofa", icon: <CategoryClassicIcon /> },
  { id: "office", name: "Sofa văn phòng", icon: <CategoryOfficeIcon /> },
  { id: "outdoor", name: "Sofa ngoài trời", icon: <CategoryOutdoorIcon /> },
  { id: "armchair", name: "Armchair", icon: <CategoryArmchairIcon /> },
  { id: "accessory", name: "Phụ kiện", icon: <CategoryAccIcon /> },
];

const cycle = [imgL.src, imgB.src, imgD.src, imgI.src];

const allProducts: ProductItem[] = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 1),
  name: `Sofa Minh Phú M-${(i + 1).toString().padStart(3, "0")}`,
  collection: i % 2 === 0 ? "Luxury Collection" : "Modern Collection",
  image: cycle[i % cycle.length],
}));

function ProductPage() {
  const [active, setActive] = useState("all");
  const [page, setPage] = useState(1);

  const products = useMemo(() => {
    if (active === "all") return allProducts;
    return allProducts.filter((_, i) =>
      active === "luxury" ? i % 2 === 0 : active === "modern" ? i % 2 === 1 : true
    );
  }, [active]);

  return (
    <div className="product-page">
      <Hero />
      <section className="product-list my-container">
        <Filter categories={categories} active={active} onChange={(id) => { setActive(id); setPage(1); }} />
        <ProductGrid products={products} />
        <Pagination total={3} current={page} onChange={setPage} />
      </section>
    </div>
  );
}

function CategoryDotIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" />
      <rect x="14" y="3" width="7" height="7" stroke="currentColor" />
      <rect x="3" y="14" width="7" height="7" stroke="currentColor" />
      <rect x="14" y="14" width="7" height="7" stroke="currentColor" />
    </svg>
  );
}
function CategoryLuxuryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 14h16v6H4z" stroke="currentColor" />
      <path d="M5 14V8a3 3 0 013-3h8a3 3 0 013 3v6" stroke="currentColor" />
      <path d="M2 18h2M20 18h2" stroke="currentColor" />
    </svg>
  );
}
function CategoryModernIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M3 12h18v8H3z" stroke="currentColor" />
      <path d="M5 12V9a4 4 0 014-4h6a4 4 0 014 4v3" stroke="currentColor" />
    </svg>
  );
}
function CategoryClassicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M3 13c0-3 3-3 3-6V5h12v2c0 3 3 3 3 6v6H3z" stroke="currentColor" />
    </svg>
  );
}
function CategoryOfficeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 11V6a3 3 0 013-3h8a3 3 0 013 3v5" stroke="currentColor" />
      <path d="M3 11h18v8H3z" stroke="currentColor" />
      <path d="M12 19v3" stroke="currentColor" />
    </svg>
  );
}
function CategoryOutdoorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 18l4-12h8l4 12" stroke="currentColor" />
      <path d="M4 18h16v3H4z" stroke="currentColor" />
      <circle cx="12" cy="3" r="1.5" stroke="currentColor" />
    </svg>
  );
}
function CategoryArmchairIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M7 13V7a3 3 0 013-3h4a3 3 0 013 3v6" stroke="currentColor" />
      <path d="M5 13h14v6H5z" stroke="currentColor" />
    </svg>
  );
}
function CategoryAccIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" />
      <path d="M12 4v8l5 3" stroke="currentColor" />
    </svg>
  );
}

export default ProductPage;
