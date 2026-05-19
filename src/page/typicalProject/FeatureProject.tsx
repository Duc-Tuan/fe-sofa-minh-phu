"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export interface FeaturedProjectData {
  eyebrow: string;
  title: string;
  description: string;
  meta: { label: string; value: string }[];
  production: string;
  images: string[];
}

interface Props {
  project: FeaturedProjectData;
  variant?: "white" | "gray";
}

const COPIES = 3;

function FeatureProject({ project, variant = "white" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const N = project.images.length;
  const middleStart = N;

  const displayImages = Array.from({ length: COPIES }).flatMap(
    () => project.images,
  );

  const [active, setActive] = useState(middleStart);
  const [translateX, setTranslateX] = useState(0);
  const [jumping, setJumping] = useState(false);
  const [productionOpen, setProductionOpen] = useState(false);

  const realIdx = (((active - middleStart) % N) + N) % N;
  const prevDisplay = ((realIdx - 1 + N) % N) + 1;
  const nextDisplay = ((realIdx + 1) % N) + 1;

  const updateTranslate = () => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    const item = track.children[active] as HTMLElement | undefined;
    if (!item) return;
    const containerWidth = container.clientWidth;
    const itemLeft = item.offsetLeft;
    const itemWidth = item.offsetWidth;
    const centerX = (containerWidth - itemWidth) / 2;
    setTranslateX(centerX - itemLeft);
  };

  useEffect(() => {
    updateTranslate();
    const onResize = () => updateTranslate();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const imgs = Array.from(track.querySelectorAll("img"));
    const cleanups: (() => void)[] = [];
    imgs.forEach((img) => {
      if (img.complete) return;
      const h = () => updateTranslate();
      img.addEventListener("load", h);
      cleanups.push(() => img.removeEventListener("load", h));
    });
    updateTranslate();
    return () => cleanups.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    if (!jumping) return;
    const id = requestAnimationFrame(() => setJumping(false));
    return () => cancelAnimationFrame(id);
  }, [jumping]);

  const onAnimationComplete = () => {
    if (jumping) return;
    if (active < middleStart) {
      setJumping(true);
      setActive((a) => a + N);
    } else if (active >= middleStart + N) {
      setJumping(true);
      setActive((a) => a - N);
    }
  };

  const goPrev = () => setActive((a) => a - 1);
  const goNext = () => setActive((a) => a + 1);

  return (
    <section className={`project-feature project-feature--${variant}`}>
      <div className="project-feature__head my-container">
        <span className="project-feature__eyebrow">{project.eyebrow}</span>
        <h2 className="project-feature__title">{project.title}</h2>
        <p className="project-feature__desc">{project.description}</p>
      </div>

      <div
        className="project-feature__carousel"
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
      >
        <motion.div
          className="project-feature__track"
          ref={trackRef}
          animate={{ x: translateX }}
          transition={{
            duration: jumping ? 0 : 0.55,
            ease: [0.4, 0, 0.2, 1],
          }}
          onAnimationComplete={onAnimationComplete}
        >
          {displayImages.map((src, i) => (
            <div
              key={i}
              className={`project-feature__slide${
                i === active ? " is-active" : ""
              }`}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              aria-label={`Ảnh ${(i % N) + 1}`}
            >
              <img src={src} alt="" />
            </div>
          ))}
        </motion.div>

        <div className="project-feature__nav">
          <button
            type="button"
            className="project-feature__nav-btn project-feature__nav-btn--prev"
            onClick={goPrev}
            aria-label="Ảnh trước"
          >
            <span className="project-feature__nav-bar" />
            <span className="project-feature__nav-num">{prevDisplay}</span>
          </button>
          <button
            type="button"
            className="project-feature__nav-btn project-feature__nav-btn--next"
            onClick={goNext}
            aria-label="Ảnh sau"
          >
            <span className="project-feature__nav-num">{nextDisplay}</span>
            <span className="project-feature__nav-bar" />
          </button>
        </div>

        <div className="project-feature__pagination">
          {project.images.map((_, i) => {
            const isActive = i === realIdx;
            return (
              <button
                key={i}
                type="button"
                className={`project-feature__page${
                  isActive ? " is-active" : ""
                }`}
                onClick={() => setActive(middleStart + i)}
                aria-label={`Đi đến ảnh ${i + 1}`}
              >
                <span className="project-feature__page-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {isActive && <span className="project-feature__page-bar" />}
              </button>
            );
          })}
        </div>
      </div>

      <div className="project-feature__info my-container">
        <div className="project-feature__meta">
          {project.meta.map((m) => (
            <div className="project-feature__meta-item" key={m.label}>
              <span className="project-feature__rule" />
              <div className="project-feature__meta-row">
                <span className="project-feature__meta-label">{m.label}</span>
                <span className="project-feature__meta-value">{m.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="project-feature__production">
          <span className="project-feature__rule" />
          <div className="project-feature__production-row">
            <div className="project-feature__production-item" onClick={() => setProductionOpen(!productionOpen)}>
              <span className="project-feature__production-label">
                Hạng mục sản xuất:
              </span>
              <svg
              className={`${productionOpen ? "" : "project-feature__production-label__svg"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  opacity="0.7"
                  d="M0.355779 5.07959L4.72983 0.715667L9.09375 5.07959"
                  stroke="black"
                  stroke-width="1.01251"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>
            <span className={`project-feature__production-text ${productionOpen ? "activate" : ""}`}>
              {project.production}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureProject;
