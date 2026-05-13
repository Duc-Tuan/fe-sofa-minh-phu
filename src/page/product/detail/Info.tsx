"use client";

import React from "react";
import Button from "@/components/button/Button";

export interface Spec {
  label: string;
  value: string;
}

interface Props {
  collection: string;
  name: string;
  description: string;
  specs: Spec[];
}

function Info({ collection, name, description, specs }: Props) {
  return (
    <div className="product-detail__info">
      <span className="product-detail__collection">{collection}</span>
      <h1>{name}</h1>
      <p className="product-detail__desc">{description}</p>

      <ul className="product-detail__specs">
        {specs.map((s) => (
          <li key={s.label}>
            <span>{s.label}</span>
            <strong>{s.value}</strong>
          </li>
        ))}
      </ul>

      <div className="product-detail__cta">
        <Button title="LIÊN HỆ TƯ VẤN" typeIcon="cross" color="black" handleClick={() => {}} />
        <Button title="TẢI CATALOGUE" typeIcon="cross" color="white" vavariant handleClick={() => {}} />
      </div>
    </div>
  );
}

export default Info;
