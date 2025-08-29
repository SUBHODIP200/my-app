// components/Navbar.js
import React from "react";
import "./Navbar.css";

export default function Navbar({ cartCount, onSellClick }) {
  return (
    <nav className="navbar">
      <div className="logo">🌾 AgriMart</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Marketplace</li>
        <li onClick={onSellClick} className="sell-link">Sell Produce</li>
        <li>About</li>
      </ul>
      <button className="cart-btn">🛒 {cartCount}</button>
    </nav>
  );
}
