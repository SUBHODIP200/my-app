// components/Hero.js
import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Fresh from Farms to Your Table</h1>
        <p>Buy and sell organic produce directly from farmers.</p>
        <button className="hero-btn">Explore Marketplace</button>
      </div>
    </section>
  );
}
