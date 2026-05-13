"use client";

import React from "react";
import banner from "@/assets/images/figma/home/news-big-2.png";

export interface Section {
  heading: string;
  content: string;
}

interface Props {
  lead: string;
  sections: Section[];
}

function Body({ lead, sections }: Props) {
  return (
    <article className="article-detail__body">
      <p className="article-detail__lead">{lead}</p>

      <div className="article-detail__image">
        <img src={banner.src} alt="" />
      </div>

      {sections.map((s, idx) => (
        <React.Fragment key={s.heading}>
          <h2>{s.heading}</h2>
          <p>{s.content}</p>
          {idx === 1 && (
            <div className="article-detail__image">
              <img src={banner.src} alt="" />
            </div>
          )}
        </React.Fragment>
      ))}
    </article>
  );
}

export default Body;
