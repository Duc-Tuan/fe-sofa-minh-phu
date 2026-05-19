"use client";

import React from "react";
import { motion } from "framer-motion";
import esgMain from "@/assets/images/figma/manufacture/esg-main.png";
import esgHouse from "@/assets/images/figma/manufacture/esg-house.png";
import esgLaptop from "@/assets/images/figma/manufacture/esg-laptop.png";
import sofa from "@/assets/images/figma/manufacture/cta-sofa.png";
import bgMain from "@/assets/images/figma/manufacture/bg-esg-main.png";

const points = [
  {
    title: "Quy trình 5S:",
    desc: "Áp dụng tại nhà xưởng để đảm bảo môi trường làm việc an toàn, sạch sẽ.",
  },
  {
    title: "Nguyên vật liệu:",
    desc: "Tuyển chọn khắt khe, có nguồn gốc rõ ràng (Gỗ tự nhiên, da thật, nỉ cao cấp).",
  },
  {
    title: "Đội ngũ:",
    desc: "100+ thợ lành nghề với bàn tay tài hoa và sự tận tâm trong từng đường kim mũi chỉ.",
  },
  {
    title: "Giá trị cộng đồng:",
    desc: "Cam kết tạo môi trường làm việc bền vững và thu nhập ổn định cho đội ngũ công nhân, cùng nhau kiến tạo những giá trị nhân văn trong từng sản phẩm.",
  },
];

function Esg() {
  return (
    <section className="manuf-esg">
      <div className="manuf-esg__grid">
        <div className="manuf-esg__grid--item">
          <motion.div
            className="manuf-esg__text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="manuf-esg__eyebrow">Cam kết</span>
            <h2 className="manuf-esg__title">Chất lượng và môi trường</h2>
            <ul className="manuf-esg__list">
              {points.map((p, idx) => (
                <li key={p.title}>
                  <span className="manuf-esg__bullet">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <circle
                        cx="12.1151"
                        cy="12.8144"
                        r="11.4979"
                        fill="#252525"
                      />
                      <path
                        d="M7.92969 12.2929L10.6756 15.296L16.2918 9.67969"
                        stroke="#F4F4F4"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                  <p>
                    <b>{p.title}</b> {p.desc}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="manuf-esg__house"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={esgHouse.src} alt="" />
          </motion.div>
        </div>

        <div className="manuf-esg__grid--item">
          <motion.div
            className="manuf-esg__main"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <img src={esgMain.src} alt="ESG illustration" />
          </motion.div>

          <motion.div
            className="manuf-esg__laptop"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={esgLaptop.src} alt="" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="manuf-cta__content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <span className="manuf-cta__eyebrow">CÓ DỰ ÁN CẦN TRIỂN KHAI?</span>
        <h2 className="manuf-cta__title">
          Hãy để năng lực của chúng tôi
          <br />
          hiện thực hóa ý tưởng của bạn
        </h2>
        <div className="manuf-cta__actions">
          <a
            className="manuf-cta__btn manuf-cta__btn--alt"
            href="tel:0925362828"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_20376_2484)">
                <mask
                  id="mask0_20376_2484"
                  style={{
                    maskType: "luminance",
                  }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <path d="M0 0H20V20H0V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_20376_2484)">
                  <path
                    d="M19.2338 4.08347C18.4658 3.02747 17.1218 2.07347 15.4488 1.39947C13.7167 0.715645 11.872 0.361567 10.0098 0.355469C8.14692 0.355376 6.30044 0.704048 4.56584 1.38347C2.88984 2.05347 1.54284 3.00147 0.772837 4.05547C0.0318366 5.06747 -0.181163 6.15747 0.154837 7.20947C0.263415 7.54353 0.475588 7.83432 0.760585 8.03966C1.04558 8.24501 1.38858 8.35422 1.73984 8.35147L4.23784 8.35347H4.24084C4.4856 8.35398 4.72749 8.30068 4.94938 8.19734C5.17126 8.094 5.36772 7.94315 5.52484 7.75547C5.68459 7.565 5.799 7.34074 5.85946 7.09961C5.91991 6.85848 5.92483 6.60678 5.87384 6.36347L5.74184 5.85247C6.46984 5.50547 8.11884 4.83447 10.0018 4.84447C11.8848 4.85447 13.5328 5.52447 14.2618 5.87247L14.1278 6.38047C14.0758 6.62371 14.0798 6.87558 14.1394 7.11706C14.199 7.35855 14.3127 7.58334 14.4718 7.77447C14.6288 7.96314 14.8254 8.1149 15.0477 8.21895C15.2699 8.323 15.5124 8.37678 15.7578 8.37647L18.2558 8.37947H18.2578C18.9858 8.37947 19.6228 7.92247 19.8428 7.24147C20.1828 6.19047 19.9728 5.09847 19.2348 4.08347H19.2338Z"
                    fill="white"
                  />
                  <path
                    d="M15.6469 10.929L13.7839 8.97295C13.7282 8.91449 13.6612 8.86796 13.5869 8.83616C13.5127 8.80436 13.4327 8.78796 13.3519 8.78795H12.1479V7.97395C12.1479 7.81562 12.0851 7.66377 11.9731 7.55181C11.8611 7.43985 11.7093 7.37695 11.5509 7.37695C11.3926 7.37695 11.2408 7.43985 11.1288 7.55181C11.0168 7.66377 10.9539 7.81562 10.9539 7.97395V8.78795H9.04395V7.97395C9.04395 7.81562 8.98105 7.66377 8.86909 7.55181C8.75713 7.43985 8.60528 7.37695 8.44695 7.37695C8.28861 7.37695 8.13676 7.43985 8.02481 7.55181C7.91285 7.66377 7.84995 7.81562 7.84995 7.97395V8.78795H6.64595C6.56517 8.78796 6.48523 8.80436 6.41098 8.83616C6.33672 8.86796 6.26969 8.91449 6.21395 8.97295L4.35095 10.929C2.89401 12.4536 2.0825 14.4821 2.08595 16.591V19.047C2.08595 19.377 2.35295 19.643 2.68295 19.643H17.3149C17.6449 19.643 17.9119 19.376 17.9119 19.047V16.591C17.9154 14.4821 17.1039 12.4536 15.6469 10.929ZM9.99895 17.462C9.17083 17.4609 8.37695 17.1314 7.79147 16.5457C7.20599 15.9601 6.87674 15.1661 6.87595 14.338C6.87701 13.5102 7.20624 12.7166 7.79147 12.1312C8.3767 11.5458 9.17018 11.2163 9.99795 11.215C10.8259 11.216 11.6196 11.5454 12.2051 12.1308C12.7905 12.7163 13.1199 13.51 13.1209 14.338C13.1202 15.1661 12.7909 15.9601 12.2054 16.5457C11.62 17.1314 10.8261 17.4609 9.99795 17.462H9.99895Z"
                    fill="white"
                  />
                  <path
                    d="M10.0003 12.4102C8.93631 12.4102 8.07031 13.2752 8.07031 14.3402C8.07031 15.4042 8.93631 16.2702 10.0003 16.2702C11.0643 16.2702 11.9303 15.4042 11.9303 14.3402C11.9303 13.2752 11.0643 12.4102 10.0003 12.4102Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_20376_2484">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1>
              <span>Hotline:</span> 0925.36.28.28
            </h1>
          </a>

          <a className="manuf-cta__btn" href="#contact">
            <h1>Đăng ký tư vấn</h1>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H5M11 3v6"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </motion.div>

      <div
        className="manuf-cta__bg"
        style={{ backgroundImage: `url(${sofa.src})` }}
      ></div>
      <img src={bgMain.src} alt="" className="manuf-cta__bg-sub"/>
      <div className="manuf-cta__overlay" />
    </section>
  );
}

export default Esg;
