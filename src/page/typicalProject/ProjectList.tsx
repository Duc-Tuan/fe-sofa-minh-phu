"use client";

import React, { useState } from "react";
import ProjectCard, { ProjectItem } from "./ProjectCard";

export type { ProjectItem } from "./ProjectCard";

interface Props {
  projects: ProjectItem[];
  totalPages?: number;
}

function buildPagination(current: number, total: number): (number | "...")[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 3) {
    return [1, 2, 3, "...", total];
  }
  if (current >= total - 2) {
    return [1, "...", total - 2, total - 1, total];
  }
  return [1, "...", current, "...", total];
}

function ProjectList({ projects, totalPages = 10 }: Props) {
  const [page, setPage] = useState(1);
  const items = buildPagination(page, totalPages);

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <section className="my-container">
      <div className="project-list__head">
        <span className="project-list__eyebrow">Minh Phú Sofa Factory</span>
        <h2 className="project-list__title">Danh sách dự án</h2>
      </div>

      <div className="project-list__grid">
        {projects.map((p, idx) => (
          <ProjectCard key={p.id} project={p} index={idx} />
        ))}
      </div>

      <nav className="project-list__pagination" aria-label="Phân trang">
        <button
          type="button"
          className="project-list__page-arrow"
          onClick={goPrev}
          disabled={page === 1}
          aria-label="Trang trước"
        >
          <svg viewBox="0 0 8 14" fill="none" aria-hidden>
            <path
              d="M6.5 1L1.5 7l5 6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <ul className="project-list__pages">
          {items.map((it, i) =>
            it === "..." ? (
              <li key={`gap-${i}`} className="project-list__page-gap">
                <span />
                <span />
                <span />
              </li>
            ) : (
              <li key={it}>
                <button
                  type="button"
                  className={`project-list__page${
                    page === it ? " is-active" : ""
                  }`}
                  onClick={() => setPage(it)}
                  aria-current={page === it ? "page" : undefined}
                >
                  {it}
                </button>
              </li>
            )
          )}
        </ul>

        <button
          type="button"
          className="project-list__page-arrow"
          onClick={goNext}
          disabled={page === totalPages}
          aria-label="Trang sau"
        >
          <svg viewBox="0 0 8 14" fill="none" aria-hidden>
            <path
              d="M1.5 1l5 6-5 6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    </section>
  );
}

export default ProjectList;
