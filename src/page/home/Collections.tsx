"use client";

import imgBedroom from "@/assets/images/figma/home/collection-bedroom.png";
import imgDining from "@/assets/images/figma/home/collection-dining.png";
import imgInterior from "@/assets/images/figma/home/collection-interior.png";
import imgLiving from "@/assets/images/figma/home/collection-living.png";
import Button from "@/components/button/Button";
import SwiperOne from "@/components/swiper/swiperOne";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";
import SectionHeader from "./SectionHeader";

const items = [
  { name: "Living Collection", image: imgLiving.src },
  { name: "Bedroom Collection", image: imgBedroom.src },
  { name: "Dining Collection", image: imgDining.src },
  { name: "Interior Collection", image: imgInterior.src },
];

function Collections() {
  return (
    <section className="home-collections my-container">
      <SectionHeader
        eyebrow="MINH PHÚ SOFA FACTORY"
        title="BỘ SƯU TẬP CỦA CHÚNG TÔI"
      />

      <SwiperOne className="home-choose-us__grid-mobile home-collections__card">
        {items.map((it) => (
          <SwiperSlide key={it.image} className="">
            <div className="home-collections__card-image">
              <img src={it.image} alt={it.name} />
            </div>

            <div className="home-collections__card-context">
              <h3 className="home-collections__card-name">{it.name}</h3>
              <h3 className="home-collections__card-content">
                Minh Phú Sofa Factory
              </h3>
            </div>
            <div className="home-collections__card-bg-sub" />
          </SwiperSlide>
        ))}
      </SwiperOne>

      <div className="home-collections__grid">
        {items.map((it, idx) => (
          <motion.article
            key={it.name}
            className="home-collections__card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="home-collections__card-image">
              <img src={it.image} alt={it.name} />
            </div>

            <div className="home-collections__card-context">
              <h3 className="home-collections__card-name">{it.name}</h3>
              <h3 className="home-collections__card-content">
                Minh Phú Sofa Factory
              </h3>
            </div>
            <div className="home-collections__card-bg-sub" />
          </motion.article>
        ))}
      </div>

      <div className="home-collections__button">
        <Button
          title="Khám phá ngay"
          typeIcon="cross"
          color="black"
          handleClick={() => {}}
        />
      </div>
    </section>
  );
}

export default Collections;
