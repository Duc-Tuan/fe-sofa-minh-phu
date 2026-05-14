"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "@/assets/images/figma/about/rnd-bg.png";

const CARDS = [
  {
    no: "01",
    title: "Nghiên cứu công nghệ",
    desc: "Đầu tư hệ thống máy cắt tự động CNC giúp tối ưu hóa vật liệu, giảm thiểu 25% rác thải công nghiệp.",
  },
  {
    no: "02",
    title: "Vật liệu sinh học",
    desc: "Ưu tiên nguồn nguyên liệu thân thiện môi trường, an toàn cho sức khỏe người sử dụng.",
  },
  {
    no: "03",
    title: 'Sofa "Sạch"',
    desc: "Quy trình sản xuất kiểm soát phát thải, hướng tới không gian sống xanh, an toàn.",
  },
];

const MOBILE_POSITIONS = ["top", "left", "right"] as const;

function RnD() {
  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState<number | null>(null);
  const [mobileLastSelected, setMobileLastSelected] = useState<number | null>(
    null
  );

  const selectMobile = (idx: number) => {
    setMobileActive(idx);
    setMobileLastSelected(idx);
  };
  const collapseMobile = () => setMobileActive(null);
  const mobileBodyIdx = mobileActive ?? mobileLastSelected;

  return (
    <section className="about-rnd my-container">
      <div className="about-rnd__bg" aria-hidden>
        <img src={bg.src} alt="" />
        <div className="about-rnd__bg-overlay" />
      </div>

      <div className="about-rnd__inner my-container">
        <div className="about-rnd__top">
          <motion.div
            className="about-rnd__head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-rnd__eyebrow">R&amp;D &amp; SỐNG XANH</span>
            <h2 className="about-rnd__title">CẢI TIẾN VÌ SỨC KHỎE CỘNG ĐỒNG</h2>
          </motion.div>
          <motion.p
            className="about-rnd__lead about-rnd__lead--mobile"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Minh Phú tối ưu hóa vật liệu và công nghệ để giảm phát thải, ưu tiên
            nguồn nguyên liệu sạch, an toàn cho sức khỏe. Mỗi kiệt tác là sự kết
            hợp giữa tư duy đổi mới và trách nhiệm môi trường, hướng tới hệ sinh
            thái nội thất: Sạch – Sang – Bền vững.
          </motion.p>
        </div>

        <div className="about-rnd__active">
          <motion.p
            className="about-rnd__lead about-rnd__lead--desktop"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Minh Phú tối ưu hóa vật liệu và công nghệ để giảm phát thải, ưu tiên
            nguồn nguyên liệu sạch, an toàn cho sức khỏe. Mỗi kiệt tác là sự kết
            hợp giữa tư duy đổi mới và trách nhiệm môi trường, hướng tới hệ sinh
            thái nội thất: Sạch – Sang – Bền vững.
          </motion.p>
          <div className="about-rnd__circles">
            {CARDS.map((c, idx) => (
              <motion.button
                key={c.no}
                type="button"
                className={`about-rnd__circle ${
                  active === idx ? "is-active" : ""
                }`}
                style={{ zIndex: CARDS.length - idx }}
                onClick={() => setActive(idx)}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1, zIndex: active === idx ? 10 : CARDS.length - idx }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <span className="about-rnd__circle-no">{c.no}</span>
                <span className="about-rnd__circle-title">{c.title}</span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="about-rnd__active-inner"
            >
              <div className="about-rnd__active-head">
                <span className="about-rnd__diamond" />
                <h3>{CARDS[active].title}</h3>
              </div>
              <p>{CARDS[active].desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className={`about-rnd__mobile ${
            mobileActive !== null ? "is-selected" : ""
          }`}
        >
          <div className="about-rnd__mobile-cluster">
            {CARDS.map((c, idx) => {
              const isSelected = mobileActive !== null;
              const isActive = mobileActive === idx;
              // base positions for cluster layout (px from cluster top-left)
              const basePos = [
                { left: 84, top: 0 },
                { left: 0, top: 125 },
                { left: 168, top: 125 },
              ][idx];
              // center target (cluster height stays 18.75rem = 300px)
              const centerLeft = 84;
              const centerTop = 62.5;
              const dx = centerLeft - basePos.left;
              const dy = centerTop - basePos.top;

              return (
                <motion.button
                  key={c.no}
                  type="button"
                  onClick={() =>
                    isSelected
                      ? isActive
                        ? collapseMobile()
                        : selectMobile(idx)
                      : selectMobile(idx)
                  }
                  className={`about-rnd__circle about-rnd__circle--mobile ${
                    isActive ? "is-active" : ""
                  }`}
                  aria-label={`${c.no} ${c.title}`}
                  animate={{
                    x: isSelected ? dx : 0,
                    y: isSelected ? dy : 0,
                    opacity: isSelected && !isActive ? 0 : 1,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    left: basePos.left,
                    top: basePos.top,
                    zIndex: isActive ? 10 : CARDS.length - idx,
                    pointerEvents: isSelected && !isActive ? "none" : "auto",
                  }}
                >
                  <span className="about-rnd__circle-no">{c.no}</span>
                  <span className="about-rnd__circle-title">{c.title}</span>
                </motion.button>
              );
            })}
          </div>

          {mobileBodyIdx !== null && (
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileBodyIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="about-rnd__mobile-body"
              >
                <div className="about-rnd__active-head">
                  <span className="about-rnd__diamond" />
                  <h3>{CARDS[mobileBodyIdx].title}</h3>
                </div>
                <p>{CARDS[mobileBodyIdx].desc}</p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}

export default RnD;
