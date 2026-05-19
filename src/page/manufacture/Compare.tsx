"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import imgRender from "@/assets/images/figma/manufacture/compare-render.png";
import imgSketch from "@/assets/images/figma/manufacture/compare-sketch.png";

function Compare() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, ratio)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [setFromClientX]);

  return (
    <section className="manuf-compare">
      <motion.div
        ref={wrapRef}
        className="manuf-compare__frame"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        onPointerDown={(e) => {
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
      >
        <img
          className="manuf-compare__layer"
          src={imgRender.src}
          alt="Phòng khách hoàn thiện"
          draggable={false}
        />
        <img
          className="manuf-compare__layer"
          src={imgSketch.src}
          alt="Bản vẽ kỹ thuật"
          draggable={false}
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        <div className="manuf-compare__divider" style={{ left: `${pos}%` }}>
          <button
            type="button"
            className="manuf-compare__handle"
            aria-label="Kéo để so sánh"
            onPointerDown={(e) => {
              e.stopPropagation();
              dragging.current = true;
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M8 2L4 6l4 4"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M4 2l4 4-4 4"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Compare;
