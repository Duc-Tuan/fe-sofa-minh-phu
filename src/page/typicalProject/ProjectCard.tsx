"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ProjectItem {
  id: string;
  category: string;
  name: string;
  image: string;
}

interface Props {
  project: ProjectItem;
  index?: number;
}

function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.button
      type="button"
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
    >
      <div className="project-card__image">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="project-card__text">
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__name">{project.name}</h3>
      </div>
    </motion.button>
  );
}

export default ProjectCard;
