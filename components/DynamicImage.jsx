"use client";

import { useEffect, useState } from "react";

export default function DynamicImage({ size = "1200x1500", query, alt, className = "" }) {
  const [nonce, setNonce] = useState("base");

  useEffect(() => {
    setNonce(`${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);
  }, []);

  return (
    <img
      src={`https://source.unsplash.com/${size}/?${query}&v=${nonce}`}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}
