import React from "react";
import RatingImg from "../assets/Rating.png";

const Card = ({ img, avatar, title, desc, name, role, rating, price }) => (
  <div className="card">
    <img src={img} alt="Course Image" className="card-img" />
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
      <div className="card-profile">
        <img src={avatar} alt="Instructor" className="avatar" />
        <div className="info">
          <p className="name">{name}</p>
          <p className="role">{role}</p>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-footer-left">
          <img src={RatingImg} alt="rating" />
          <div className="rating">{rating}</div>
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  </div>
);

export default Card;
