import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Webler Pizzéria </h1>
        <p> A webfejlesztők kevenc pizzája.</p>
        <Link to="/menu">
          <button> Rendelés leadása </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
