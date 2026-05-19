"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/assets/icon";
import bg from "@/assets/images/figma/manufacture/process-bg.png";
import stepImage from "@/assets/images/figma/manufacture/process-image.png";

interface Step {
  id: string;
  short: string;
  desc: string;
  iconName: string;
}

const steps: Step[] = [
  {
    id: "01",
    short: "Tiếp nhận yêu cầu & tư vấn kỹ thuật",
    desc: "Tiếp nhận thông tin dự án, khảo sát nhu cầu và đề xuất phương án thiết kế – kỹ thuật phù hợp.",
    iconName: "icon-process-1",
  },
  {
    id: "02",
    short: "Triển khai kỹ thuật",
    desc: "Vận chuyển an toàn: Sở hữu quy trình đóng gói đa lớp chống va đập và đội xe vận chuyển chuyên dụng, đảm bảo hàng hóa nguyên vẹn đến mọi tỉnh thành trên toàn quốc.",
    iconName: "icon-process-2",
  },
  {
    id: "03",
    short: "Gia công khung sofa",
    desc: "Cắt và lắp ráp khung gỗ bằng hệ thống CNC chính xác, đảm bảo kết cấu chuẩn xác từng milimet.",
    iconName: "icon-process-3",
  },
  {
    id: "04",
    short: "Xử lý mút – nệm",
    desc: "Xử lý mút và nệm cao cấp với độ êm và độ bền tối ưu, đảm bảo trải nghiệm thoải mái dài lâu.",
    iconName: "icon-process-4",
  },
  {
    id: "05",
    short: "Cắt & may vải/da",
    desc: "Bộ phận cắt – may với máy may công nghiệp, đảm bảo từng đường chỉ chuẩn cao cấp.",
    iconName: "icon-process-5",
  },
  {
    id: "06",
    short: "Bọc sofa & hoàn thiện sản phẩm",
    desc: "Bọc thủ công tỉ mỉ, tinh chỉnh chi tiết, gia cố cấu trúc và hoàn thiện thẩm mỹ tổng thể.",
    iconName: "icon-process-6",
  },
  {
    id: "07",
    short: "Kiểm tra chất lượng & xuất xưởng",
    desc: "QC kiểm tra cấu trúc, độ êm, vật liệu và thẩm mỹ tổng thể trước khi đóng gói xuất xưởng.",
    iconName: "icon-process-7",
  },
];

interface StepProps {
  step: Step;
  active: boolean;
  placement: "top" | "bottom";
  delay: number;
  onClick: () => void;
}

function ProcessStep({ step, active, placement, delay, onClick }: StepProps) {
  return (
    <motion.button
      type="button"
      className={`manuf-process__step ${placement} ${
        active ? "is-active" : ""
      }`}
      onClick={onClick}
      initial={{ y: placement === "top" ? 20 : -20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="manuf-process__step-icon">
        <div className="manuf-process__step-art">
          <Icon name={step.iconName} />
        </div>
      </div>
      <span className="manuf-process__step-dot" aria-hidden="true" />
      <span className="manuf-process__step-label">{step.short}</span>
    </motion.button>
  );
}

const LINE_W = 11.2; // rem
const DOT_POSITIONS = [
  { x: 4.625, y: 9.4 },
  { x: 15.34, y: 9.4 },
  { x: 26.06, y: 9.4 },
  { x: 36.775, y: 9.4 },
  { x: 36.775, y: 26.85 },
  { x: 20.7, y: 26.85 },
  { x: 4.625, y: 26.85 },
];

function indicatorAt(idx: number, dir: "forward" | "back") {
  const d = DOT_POSITIONS[idx];
  const isTop = idx <= 3;
  const trailLeft = (isTop && dir === "forward") || (!isTop && dir === "back");
  return {
    x: trailLeft ? d.x - LINE_W : d.x,
    y: d.y - 0.0625,
    gradient: trailLeft ? 270 : 90,
  };
}

function Process() {
  const [active, setActive] = useState(1);
  const [dir, setDir] = useState<"forward" | "back">("forward");
  const prevActive = useRef(1);
  const stripRef = useRef<HTMLDivElement>(null);
  const cur = steps[active];

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const track = strip.firstElementChild as HTMLElement | null;
    if (!track) return;
    const item = track.children[active + 1] as HTMLElement | undefined;
    if (!item) return;
    const offset = item.offsetLeft - (strip.clientWidth - item.offsetWidth) / 2;
    strip.scrollTo({ left: Math.max(0, offset), behavior: "smooth" });
  }, [active]);

  const top = steps.slice(0, 4);
  const bottom = steps.slice(4); // [05, 06, 07]

  const goTo = (i: number) => {
    if (i === active) return;
    prevActive.current = active;
    setDir(i > active ? "forward" : "back");
    setActive(i);
  };

  const prev = () => goTo((active - 1 + steps.length) % steps.length);
  const next = () => goTo((active + 1) % steps.length);

  return (
    <section
      className="manuf-process"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="manuf-process__shade" />

      <div className="manuf-process__inner my-container">
        <div className="manuf-process__head">
          <span className="manuf-process__eyebrow">Mô hình vận hành</span>
          <h2 className="manuf-process__title">
            Quy trình sản xuất
            <span className="manuf-process__title-suffix"> 7 bước</span>
          </h2>
        </div>

        <div className="manuf-process__strip" role="tablist" ref={stripRef}>
          <div className="manuf-process__strip-track">
            <span className="manuf-process__strip-line" aria-hidden="true" />
            {steps.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={s.short}
                className={`manuf-process__strip-step${
                  i === active ? " is-active" : ""
                }`}
                onClick={() => goTo(i)}
              >
                <div className="manuf-process__strip-icon">
                  <Icon name={s.iconName} />
                </div>
                <span className="manuf-process__strip-dot" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        <div className="manuf-process__body">
          <div className="manuf-process__left">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.id}
                className="manuf-process__panel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="manuf-process__panel-title">{cur.short}</h3>
                <span className="manuf-process__panel-rule" />
                <p className="manuf-process__panel-desc">{cur.desc}</p>
                <div className="manuf-process__panel-image">
                  <img src={stepImage.src} alt={cur.short} />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="manuf-process__pager">
              <span className="manuf-process__pager-count">
                <strong>{cur.id}</strong>
                <em> / </em>
                <span>{String(steps.length).padStart(2, "0")}</span>
              </span>
              <div className="manuf-process__pager-arrows">
                <button onClick={prev} aria-label="Trước">
                  <svg viewBox="0 0 24 16" fill="none">
                    <path
                      d="M2 8h20M2 8l6-6M2 8l6 6"
                      stroke="#252525"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button onClick={next} aria-label="Tiếp">
                  <svg viewBox="0 0 24 16" fill="none">
                    <path
                      d="M22 8H2M22 8l-6-6M22 8l-6 6"
                      stroke="#252525"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="manuf-process__right">
            <svg
              className="manuf-process__path"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 749 334"
              fill="none"
            >
              <path
                d="M1 1H723.076C736.331 1 747.076 11.7452 747.076 25V308.98C747.076 322.235 736.331 332.98 723.076 332.98H1"
                stroke="#E0E0E2"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* {(() => {
              if (active === 0) return null;
              const target = indicatorAt(active, dir);
              const prevPos = indicatorAt(prevActive.current, dir);
              const isCrossRow =
                (prevActive.current <= 3 && active >= 4) ||
                (prevActive.current >= 4 && active <= 3);
              const cornerX = 38.6; // x position of the U-curve's outer edge

              const animateProps = isCrossRow
                ? {
                    x: [
                      `${prevPos.x}rem`,
                      `${cornerX}rem`,
                      `${cornerX}rem`,
                      `${target.x}rem`,
                    ],
                    y: [
                      `${prevPos.y}rem`,
                      `${prevPos.y}rem`,
                      `${target.y}rem`,
                      `${target.y}rem`,
                    ],
                  }
                : {
                    x: `${target.x}rem`,
                    y: `${target.y}rem`,
                  };

              const transition = isCrossRow
                ? {
                    duration: 0.85,
                    times: [0, 0.35, 0.65, 1],
                    ease: "easeInOut" as const,
                  }
                : { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const };

              return (
                <motion.span
                  key="indicator"
                  className="manuf-process__indicator"
                  style={{
                    background: `linear-gradient(${target.gradient}deg, #000 0%, rgba(255, 255, 255, 0) 100%)`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ ...animateProps, opacity: 1 }}
                  transition={transition}
                  aria-hidden
                />
              );
            })()} */}

            <div className="manuf-process__row top">
              {top.map((s, idx) => (
                <ProcessStep
                  key={s.id}
                  step={s}
                  active={steps.indexOf(s) === active}
                  placement="top"
                  delay={idx * 0.08}
                  onClick={() => goTo(steps.indexOf(s))}
                />
              ))}
            </div>

            <div className="manuf-process__row bottom">
              <ProcessStep
                step={bottom[2]}
                active={steps.indexOf(bottom[2]) === active}
                placement="bottom"
                delay={0}
                onClick={() => goTo(steps.indexOf(bottom[2]))}
              />
              <ProcessStep
                step={bottom[1]}
                active={steps.indexOf(bottom[1]) === active}
                placement="bottom"
                delay={0.08}
                onClick={() => goTo(steps.indexOf(bottom[1]))}
              />
              <ProcessStep
                step={bottom[0]}
                active={steps.indexOf(bottom[0]) === active}
                placement="bottom"
                delay={0.16}
                onClick={() => goTo(steps.indexOf(bottom[0]))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
