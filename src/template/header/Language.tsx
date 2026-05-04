import Icon from "@/assets/icon";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import "@/css/language.model.css";
import { Option } from "@/types/global";
import { dataLanguage } from "./type";
import { useClickOutside } from "@/hook/useClickOutside";

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.1,
    },
  },
};

function Language() {
  const [value, setValue] = useState<Option<string>>(dataLanguage[0]);
  const [show, setShow] = useState<boolean>(false);
  const refContainer = useRef<any>(null);

  useClickOutside(refContainer, () => setShow(false), show);

  return (
    <div className="header-language" ref={refContainer}>
      <motion.div
        className="header-language_button"
        whileHover={{ background: "rgba(255, 255, 255, 0.1)" }}
        whileTap={{ background: "transparent" }}
        onClick={() => setShow(!show)}
      >
        <Icon name="icon-language" />
        <h4>{value.label}</h4>
        <Icon name="icon-down" className="icon-down" />
      </motion.div>

      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformOrigin: "top center" }}
            className="menu-language"
          >
            {dataLanguage.map((i) => (
              <motion.div
                variants={itemVariants}
                className={`menu-item ${value.value === i.value ? "activate" : ""}`}
                onClick={() => {
                  setValue(i);
                  setShow(false);
                }}
                key={i.label}
              >
                {i.value}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Language;
