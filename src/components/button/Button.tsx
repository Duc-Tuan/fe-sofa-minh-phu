"use client";
import React, { useState } from "react";
import "@/css/button.model.css";
import { Func } from "@/types/global";
import Icon from "@/assets/icon";
import { motion } from "framer-motion";

interface Props {
  title: string;
  typeIcon: "cross" | "horizontal";
  handleClick: Func;
  color?: "white" | "black";
  vavariant?: boolean;
}

function Button(props: Props) {
  const { handleClick, title, typeIcon, color = "white", vavariant } = props;

  const [isHovered, setIsHovered] = useState<Boolean>(false);
  return (
    <motion.button
      onClick={handleClick}
      className={`button ${color} ${vavariant ? "vavariant" : ""}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="button-sub">
        <motion.div
          className="whitespace-nowrap"
          animate={{
            y: isHovered ? -30 : 0,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <h4>{title}</h4>
        </motion.div>

        <motion.div
          className="whitespace-nowrap title-sub"
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 30,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <h4>{title}</h4>
        </motion.div>
      </div>

      <motion.div
        animate={{
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {typeIcon === "cross" ? (
          <Icon name="icon-arrow" />
        ) : (
          <span>
            <Icon name="icon-arrow" />
          </span>
        )}
      </motion.div>
    </motion.button>
  );
}

export default Button;
