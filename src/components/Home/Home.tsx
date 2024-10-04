// src/pages/Home.tsx
import React from "react";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Website</h1>
        <p>Your go-to place for everything awesome!</p>
        <button className="home-button">Explore More</button>
      </header>
    </div>
  );
};

export default Home;
