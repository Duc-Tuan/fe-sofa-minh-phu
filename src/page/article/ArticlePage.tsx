"use client";
import React from "react";
import "@/css/article.model.css";
import Hero from "./Hero";
import Featured from "./Featured";
import ArticleGrid from "./ArticleGrid";

function ArticlePage() {
  return (
    <div className="article-page">
      <Hero />
      <Featured />
      <ArticleGrid />
    </div>
  );
}

export default ArticlePage;
