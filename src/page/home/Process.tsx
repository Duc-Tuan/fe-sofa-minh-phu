"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";
import Icon from "@/assets/icon";

interface Step {
  index: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  done?: boolean;
}

const steps: Step[] = [
  {
    index: "01",
    label: "Tiếp nhận yêu cầu & tư vấn kỹ thuật",
    icon: <Icon name="icon-process-1" />,
  },
  {
    index: "02",
    label: "Triển khai kỹ thuật",
    icon: <Icon name="icon-process-2" />,
    active: true,
  },
  {
    index: "03",
    label: "Gia công khung sofa",
    icon: <Icon name="icon-process-3" />,
  },
  {
    index: "04",
    label: "Xử lý mút – nệm",
    icon: <Icon name="icon-process-4" />,
    done: true,
  },
  {
    index: "05",
    label: "Cắt & may vải/da",
    icon: <Icon name="icon-process-5" />,
  },
  {
    index: "06",
    label: "Bọc sofa & hoàn thiện sản phẩm",
    icon: <Icon name="icon-process-6" />,
    done: true,
  },
  {
    index: "07",
    label: "Kiểm tra chất lượng & xuất xưởng",
    icon: <Icon name="icon-process-7" />,
    done: true,
  },
];

function Process() {
  const top = steps.slice(0, 4);
  const bottom = steps.slice(4); // [05, 06, 07]

  return (
    <section className="home-process my-container">
      <span className="home-process__watermark">PROCESS</span>

      <div className="home-process__inner">
        <div className="home-process__intro">
          <span className="home-process__eyebrow">Mô hình vận hành</span>
          <h2 className="home-process__title">
            QUY TRÌNH SẢN XUẤT <br /> MINH PHÚ SOFA FACTORY
          </h2>
          <p className="home-process__desc">
            Hệ thống sản xuất được tổ chức bài bản, đảm bảo độ chính xác – tính
            ổn định – khả năng đáp ứng đơn hàng dài hạn.
          </p>
          <div className="home-process__cta">
            <Button
              title="Quy trình sản xuất"
              typeIcon="cross"
              color="black"
              handleClick={() => {}}
            />
          </div>
        </div>

        <div className="home-process__timeline">
          <svg
            className="home-process__path"
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
          <svg
            className="home-process__path-mobile"
            xmlns="http://www.w3.org/2000/svg"
            width="345"
            height="548"
            viewBox="0 0 345 548"
            fill="none"
          >
            <path
              d="M88.9009 1H328.992C337.276 1 343.991 7.71528 343.992 15.9993L343.999 168.053C344 176.337 337.284 183.053 328.999 183.053H16C7.71574 183.053 1 189.769 1 198.053V352.52C1 360.804 7.71573 367.52 16 367.52H328.999C337.284 367.52 344 374.236 343.999 382.521L343.992 531.844C343.991 540.128 337.276 546.843 328.992 546.843H173.304"
              stroke="#E0E0E2"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div className="home-process__row top">
            {top.map((s, idx) => (
              <ProcessStep
                key={s.index}
                step={s}
                delay={idx * 0.08}
                placement={`top`}
              />
            ))}
          </div>

          <div className="home-process__row bottom">
            <ProcessStep
              step={bottom[2]}
              delay={0}
              placement="bottom"
              className={`home-process__row--sub`}
            />
            <ProcessStep step={bottom[1]} delay={0.08} placement="bottom" />
            <ProcessStep step={bottom[0]} delay={0.16} placement="bottom" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  step: Step;
  delay: number;
  placement: "top" | "bottom";
  className?: string;
}

function ProcessStep({
  step,
  delay,
  placement,
  className = "",
}: ProcessStepProps) {
  return (
    <motion.div
      className={`home-process__step ${placement} ${step.active ? "is-active" : ""} ${step.done ? "is-done" : ""} ${className}`}
      initial={{ opacity: 0, y: placement === "top" ? 20 : -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="home-process__step-icon">
        <div className="home-process__step-art">{step.icon}</div>
      </div>
      <span className="home-process__step-dot" aria-hidden="true" />
      <span className="home-process__step-label">{step.label}</span>
    </motion.div>
  );
}

export default Process;
