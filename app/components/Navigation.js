'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // ฟังก์ชัน toggle สำหรับเปิด-ปิดเมนู
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // ฟังก์ชันปิดเมนู (ใช้เมื่อคลิกลิงก์เปลี่ยนหน้า)
  const closeCollapse = () => {
    setIsCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" href="/" onClick={closeCollapse}>
          MyWebsite
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNavDropdown"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${isCollapsed ? "" : " show"}`} id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" href="/" onClick={closeCollapse}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="/about" onClick={closeCollapse}>
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/services/design" onClick={closeCollapse}>
                    Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/services/development" onClick={closeCollapse}>
                    Development
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="/services/seo" onClick={closeCollapse}>
                    SEO
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled text-white-50"
                href="#"
                aria-disabled="true"
              >
                Disabled
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={closeCollapse}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="btn btn-light text-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
