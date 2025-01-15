import React from "react";
import "./Header.css"; // Import file CSS

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">My Blog</h1>
      <nav className="nav">
        <a href="/" className="link">Home</a>
        <a href="/about" className="link">About</a>
        <a href="/contact" className="link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
