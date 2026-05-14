import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";

function SwiperOne({ children, className }: { children: React.ReactNode,className: string }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{
        clickable: true,
        dynamicBullets: false,
      }}
      spaceBetween={20}
      slidesPerView={1}
      className={className}
    >
      {children}
    </Swiper>
  );
}

export default SwiperOne;
