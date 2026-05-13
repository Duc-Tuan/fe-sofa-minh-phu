"use client";

import React from "react";
import { motion } from "framer-motion";

const DEPARTMENTS = [
  { title: "Phòng Thiết kế & R&D", desc: "Đọc hiểu bản vẽ, bóc tách kỹ thuật và phát triển vật liệu mới." },
  { title: "Phòng Sản xuất", desc: "Vận hành dây chuyền CNC và tổ thợ may đo, chế tác từng chi tiết." },
  { title: "Phòng QC & Hoàn thiện", desc: "Kiểm soát chất lượng từng công đoạn, đảm bảo độ bền và thẩm mỹ." },
  { title: "Phòng Kinh doanh dự án", desc: "Đồng hành cùng KTS, quản lý tiến độ và bàn giao công trình." },
];

function Team() {
  return (
    <section className="about-team">
      <div className="about-team__inner my-container">
        <motion.div
          className="about-team__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-team__eyebrow">Về chúng tôi</span>
          <h2 className="about-team__title">Đội ngũ nhân sự: “linh hồn” của nhà máy</h2>
          <p className="about-team__lead">
            Mỗi sản phẩm Minh Phú là kết tinh của một tập thể được tổ chức bài bản – từ ban điều
            hành, phòng thiết kế & R&D, đội ngũ sản xuất, kiểm soát chất lượng đến bộ phận kinh doanh
            dự án – cùng nhau giữ trọn “linh hồn” của từng tác phẩm.
          </p>
        </motion.div>

        <div className="about-team__chart">
          <motion.div
            className="about-team__top"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            Ban Giám đốc
          </motion.div>
          <div className="about-team__connector" />
          <div className="about-team__row">
            {DEPARTMENTS.map((d, idx) => (
              <motion.div
                key={d.title}
                className="about-team__dept"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
