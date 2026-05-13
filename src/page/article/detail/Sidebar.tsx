"use client";

import React from "react";
import Link from "next/link";

export interface RelatedArticle {
  id: string;
  title: string;
  date: string;
  image: string;
}

interface Props {
  items: RelatedArticle[];
}

function Sidebar({ items }: Props) {
  return (
    <aside className="article-detail__sidebar">
      <span className="article-detail__sidebar-eyebrow">BÀI VIẾT LIÊN QUAN</span>
      <ul>
        {items.map((r) => (
          <li key={r.id}>
            <Link href={`/article/${r.id}`} className="article-detail__related">
              <div className="article-detail__related-image">
                <img src={r.image} alt={r.title} />
              </div>
              <div>
                <span>{r.date}</span>
                <h4>{r.title}</h4>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
