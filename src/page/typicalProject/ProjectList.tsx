"use client";

import React, { useState } from "react";
import ProjectCard, { ProjectItem } from "./ProjectCard";

interface Tab {
  id: string;
  name: string;
}

interface Props {
  tabs: Tab[];
  projects: ProjectItem[];
}

function ProjectList({ tabs, projects }: Props) {
  const [active, setActive] = useState(tabs[0]?.id ?? "all");
  const [page, setPage] = useState(1);

  return (
    <section className="project-list my-container">
      <div className="project-list__head">
        <span>DANH SÁCH DỰ ÁN</span>
        <h2>NHỮNG KHÔNG GIAN ĐÃ ĐỒNG HÀNH</h2>
      </div>

      <div className="project-list__tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`project-list__tab ${active === t.id ? "is-active" : ""}`}
            onClick={() => { setActive(t.id); setPage(1); }}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className="project-list__grid">
        {projects.map((p, idx) => (
          <ProjectCard key={p.id} project={{ ...p, wide: idx % 3 === 0 }} index={idx} />
        ))}
      </div>

      <div className="project-list__pagination">
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            type="button"
            className={`project-list__page-btn ${page === n ? "is-active" : ""}`}
            onClick={() => setPage(n)}
          >
            {n}
          </button>
        ))}
        <button
          type="button"
          className="project-list__page-btn"
          onClick={() => setPage(Math.min(page + 1, 3))}
          aria-label="next"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default ProjectList;
