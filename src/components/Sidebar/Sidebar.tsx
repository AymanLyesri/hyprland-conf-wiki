// src/components/Sidebar/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>MyLogo</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Hello</Link>
          </li>
          <li>
            <Link to="/installation">Installation</Link>
          </li>
          <li>
            <Link to="/contact">Packages</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
