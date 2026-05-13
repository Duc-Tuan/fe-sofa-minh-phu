import React, { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform,
} from "framer-motion";

const RightToLeftSlider = ({ data }: { data: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);
  const [contentWidth, setContentWidth] = React.useState(0);

  // Nhân đôi dữ liệu để tạo hiệu ứng liên tục
  const duplicatedData = [...data, ...data, ...data, ...data, ...data, ...data];

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const content = container.querySelector(".slider-content") as HTMLElement;

      if (content) {
        setWidth(container.offsetWidth);
        setContentWidth(content.scrollWidth / 2); // Chia 2 vì nhân đôi dữ liệu
      }
    }
  }, []);

  const x = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    // Điều chỉnh tốc độ: giá trị càng lớn chạy càng nhanh
    const speed = 50; // pixels/giây
    let newX = x.get() - speed * (delta / 1000);

    // Reset khi chạy hết 1 nửa (vì nhân đôi dữ liệu)
    if (Math.abs(newX) >= contentWidth) {
      newX = 0;
    }

    x.set(newX);
  });

  return (
    <div
      ref={containerRef}
      className="slider-container"
      style={{ overflow: "hidden", width: "100%" }}
    >
      <motion.div
        className="slider-track"
        style={{
          display: "flex",
          gap: "5rem",
          width: "fit-content",
        }}
        animate={{
          x: [0, "-33.33%"],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {duplicatedData.map((src, idx) => (
          <div key={idx} className="slide" style={{ flexShrink: 0 }}>
            <img src={src} alt={`Partner ${idx + 1}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RightToLeftSlider;
