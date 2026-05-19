"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Compare from "./Compare";
import bg from "@/assets/images/figma/manufacture/manuf-capacity-and-manuf-compare.png"

interface ExpertItem {
  big?: string;
  largeTitle?: string;
  largeTitleMobile?: string;
  unit?: string[];
  desc: string;
}

const items: ExpertItem[] = [
  {
    big: "20+",
    unit: ["Chuyên viên", "tư vấn"],
    desc: "Thấu hiểu khách hàng, đưa ra giải pháp kỹ thuật tối ưu nhất.",
  },
  {
    big: "100+",
    unit: ["Nghệ nhân &", "Thợ lành nghề"],
    desc: "14+ năm kinh nghiệm, am hiểu sâu sắc kết cấu và vật liệu.",
  },
  {
    largeTitle: "Kỹ sư thiết kế\n& Kỹ thuật",
    largeTitleMobile: "Kỹ sư thiết kế & Kỹ thuật",
    desc: "Những người chuyển hóa bản vẽ 3D thành kiệt tác thực tế.",
  },
];

function Capacity() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="manuf-capacity-and-manuf-compare">
      <img src={bg.src} alt="" className="manuf-capacity-and-manuf-compare__bgImg"/>
      <section className="manuf-capacity my-container ">
        <div className="manuf-capacity__glow" />
        <div className="manuf-capacity__head">
          <span className="manuf-capacity__eyebrow">Đội ngũ tinh hoa</span>
          <h2 className="manuf-capacity__title">
            “Bàn tay vàng” <br /> trong làng nội thất
          </h2>
          <p className="manuf-capacity__intro">
            Mỗi sản phẩm không chỉ được làm bằng máy móc, mà còn được ‘thổi hồn’
            bởi sự tận tâm.
          </p>
        </div>

        <div className="manuf-capacity__grid">
          {items.map((it, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                className={`manuf-capacity__item${isOpen ? " is-open" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <button
                  type="button"
                  className="manuf-capacity__item-head"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  {it.big && (
                    <>
                      <strong className="manuf-capacity__item-num">
                        {it.big}
                      </strong>
                      <span className="manuf-capacity__item-unit">
                        {it.unit?.map((u, i) => (
                          <React.Fragment key={i}>
                            {u}
                            {i < (it.unit?.length || 0) - 1 ? <br /> : null}
                          </React.Fragment>
                        ))}
                      </span>
                    </>
                  )}
                  {it.largeTitle && (
                    <h3 className="manuf-capacity__item-title">
                      <span className="manuf-capacity__item-title--pc">
                        {it.largeTitle}
                      </span>
                      <span className="manuf-capacity__item-title--mobile">
                        {it.largeTitleMobile || it.largeTitle}
                      </span>
                    </h3>
                  )}
                  <span className="manuf-capacity__item-caret" aria-hidden>
                    <svg
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L8 8.5L15 1.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <span className="manuf-capacity__item-divider" />
                <p className="manuf-capacity__item-desc manuf-capacity__item-desc--pc">
                  {it.desc}
                </p>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      className="manuf-capacity__item-desc manuf-capacity__item-desc--mobile"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <span>{it.desc}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Compare />
    </div>
  );
}

export default Capacity;
