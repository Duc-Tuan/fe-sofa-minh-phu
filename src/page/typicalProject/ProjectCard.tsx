"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ProjectItem {
  id: string;
  name: string;
  city: string;
  image: string;
  wide?: boolean;
}

interface Props {
  project: ProjectItem;
  index?: number;
}

function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.article
      className={`project-list__card ${project.wide ? "wide" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
    >
      <div className="project-list__card-image">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="project-list__card-content">
        <span>{project.city}</span>
        <h3>{project.name}</h3>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
