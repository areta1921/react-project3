import React from "react";
import image from "../image/Tulu_Gebr.jpeg";
import images from "../image/star.png";
import '../App.css';
const Card = () => {
  return (
    <div className="card">
      <img src={image} alt="" className="card--image"/>
      <div className="card--stats">
        <img src={images} alt="" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span>  / person</p>
    </div>
  );
};

export default Card;
