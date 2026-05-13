"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  align?: "center" | "left";
  light?: boolean;
}

function SectionHeader({ eyebrow, title, align = "center", light }: Props) {
  return (
    <motion.div
      className={`home-section-header ${align} ${light ? "light" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && <span className="home-section-header__eyebrow">{eyebrow}</span>}
      <h2 className="home-section-header__title">{title}</h2>
    </motion.div>
  );
}

export default SectionHeader;
