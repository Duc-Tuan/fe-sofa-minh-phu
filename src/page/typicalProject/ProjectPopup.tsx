"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "./ProjectCard";
import bg from "@/assets/images/figma/project/bg-featureProject.png";
import bgMobile from "@/assets/images/figma/project/bg-featureProject-mobile.png";

interface Props {
  project: ProjectItem;
  onClose: () => void;
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

function ProjectPopup({ project, onClose }: Props) {
  const slides = project.slides;
  const [currentIdx, setCurrentIdx] = useState(0);
  const dirRef = useRef(1);
  const slide = slides[currentIdx];

  const goPrev = useCallback(() => {
    dirRef.current = -1;
    setCurrentIdx((i) => (i === 0 ? slides.length - 1 : i - 1));
  }, [slides.length]);

  const goNext = useCallback(() => {
    dirRef.current = 1;
    setCurrentIdx((i) => (i === slides.length - 1 ? 0 : i + 1));
  }, [slides.length]);

  const [productionOpen, setProductionOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const half = Math.ceil(slide.meta.length / 2);
  const leftCol = slide.meta.slice(0, half);
  const rightCol = slide.meta.slice(half);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  return (
    <motion.div
      className="project-popup-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="project-popup"
        onClick={(e) => e.stopPropagation()}
        initial={false}
        exit={isMobile ? { y: "100%" } : { x: "100%" }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        <div
          className="project-popup__hero"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait" custom={dirRef.current}>
            <motion.div
              key={currentIdx}
              custom={dirRef.current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="project-popup__image-wrap"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="project-popup__image"
              />
            </motion.div>
          </AnimatePresence>
          <button
            type="button"
            className="project-popup__arrow project-popup__arrow--prev"
            onClick={goPrev}
            aria-label="Ảnh trước"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 15"
              fill="none"
            >
              <path
                d="M17.5841 8.07088C17.9746 7.68035 17.9746 7.04719 17.5841 6.65666L11.2201 0.292702C10.8296 -0.0978227 10.1964 -0.0978227 9.80589 0.292702C9.41536 0.683226 9.41536 1.31639 9.80589 1.70692L15.4627 7.36377L9.80589 13.0206C9.41536 13.4111 9.41536 14.0443 9.80589 14.4348C10.1964 14.8254 10.8296 14.8254 11.2201 14.4348L17.5841 8.07088ZM0 7.36377L0 8.36377L16.877 8.36377L16.877 7.36377L16.877 6.36377L0 6.36377L0 7.36377Z"
                fill="white"
              />
            </svg>
          </button>

          <button
            type="button"
            className="project-popup__arrow project-popup__arrow--next"
            onClick={goNext}
            aria-label="Ảnh sau"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 15"
              fill="none"
            >
              <path
                d="M0.290939 6.65666C-0.0995846 7.04719 -0.0995846 7.68035 0.290939 8.07088L6.6549 14.4348C7.04543 14.8254 7.67859 14.8254 8.06912 14.4348C8.45964 14.0443 8.45964 13.4111 8.06912 13.0206L2.41226 7.36377L8.06911 1.70692C8.45964 1.31639 8.45964 0.683227 8.06911 0.292703C7.67859 -0.0978218 7.04542 -0.0978217 6.6549 0.292703L0.290939 6.65666ZM17.875 7.36377L17.875 6.36377L0.998047 6.36377L0.998047 7.36377L0.998047 8.36377L17.875 8.36377L17.875 7.36377Z"
                fill="white"
              />
            </svg>
          </button>

          <div className="project-popup__dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`project-popup__dot${i === currentIdx ? " is-active" : ""}`}
                onClick={() => setCurrentIdx(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className="project-popup__close"
            onClick={onClose}
            aria-label="Đóng"
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path
                d="M1 1l6 6M7 1l-6 6"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="project-popup__mobile-pagination">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`project-popup__mobile-page${i === currentIdx ? " is-active" : ""}`}
                onClick={() => setCurrentIdx(i)}
              >
                <span className="project-popup__mobile-page-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i === currentIdx && (
                  <span className="project-popup__mobile-page-bar" />
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait" custom={dirRef.current}>
          <div className="project-popup__container">
            <div className="project-popup-overlay__bg">
              <img src={bg.src} alt="" className="tablet"/>
              <img src={bgMobile.src} alt="" className="mobile"/>
            </div>
            <motion.div
              key={currentIdx}
              custom={dirRef.current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="project-popup__content"
            >
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.08 }}
                className="project-popup__title"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.14 }}
                className="project-popup__desc"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.2 }}
                className="project-popup__details"
              >
                <div className="project-popup__details-col">
                  {leftCol.map((m) => (
                    <div key={m.label} className="project-popup__meta-item">
                      <span className="project-popup__meta-rule" />
                      <span className="project-popup__meta-label">
                        {m.label}
                      </span>
                      <span className="project-popup__meta-value">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="project-popup__details-col">
                  {rightCol.map((m) => (
                    <div key={m.label} className="project-popup__meta-item">
                      <span className="project-popup__meta-rule" />
                      <span className="project-popup__meta-label">
                        {m.label}
                      </span>
                      <span className="project-popup__meta-value">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.26 }}
                className="project-popup__production"
              >
                <span className="project-popup__meta-rule" />
                <div
                  className="project-popup__production-head"
                  onClick={() => setProductionOpen(!productionOpen)}
                >
                  <span className="project-popup__production-label">
                    Hạng mục sản xuất:
                  </span>
                  <svg
                    className={`project-popup__production-chevron${productionOpen ? " is-open" : ""}`}
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      opacity="0.7"
                      d="M0.355779 5.07959L4.72983 0.715667L9.09375 5.07959"
                      stroke="currentColor"
                      strokeWidth="1.01251"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <span
                  className={`project-popup__production-text${productionOpen ? " is-open" : ""}`}
                >
                  {slide.production}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default ProjectPopup;
