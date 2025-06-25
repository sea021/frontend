
// app/components/Navigation.js
'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [activeIndex, setActiveIndex] = useState(null);

  const links = [
    { href: "/", label: "หน้าแรก" },
    { href: "/about", label: "เกี่ยวกับ" },
    { href: "/service", label: "บริการ" },
    { href: "/contact", label: "ติดต่อ" },
  ];

  return (
    <nav
      style={{
        padding: "1rem 2rem",
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",              // เพิ่ม display: flex
        justifyContent: "flex-end",   // จัดเนื้อหาไปทางขวา
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
          fontSize: "1.1rem",
          color: "#333",
          userSelect: "none",
        }}
      >
        {links.map(({ href, label }, i) => (
          <li key={href}>
            <Link href={href} legacyBehavior>
              <a
                style={{
                  textDecoration: "none",
                  color: activeIndex === i ? "#0070f3" : "#333",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                  fontWeight: "600",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.3s ease",
                  boxShadow:
                    activeIndex === i
                      ? "inset 0 -2px 0 0 #0070f3"
                      : "inset 0 -2px 0 0 transparent",
                }}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {label}
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #0070f3, #00d8ff, #0070f3)",
                    borderRadius: "2px",
                    transformOrigin: "left",
                    transform: activeIndex === i ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 0.3s ease",
                    pointerEvents: "none",
                  }}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}


