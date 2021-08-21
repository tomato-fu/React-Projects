import React from "react";

const Menu = ({ img, title, price, desc }) => (
  <div className="container-dish">
    <div className="dish-left">
      <img src={img} alt={title} />
    </div>
    <div className="dish-right">
      <div className="title-dish">
        <h5>{title}</h5>
        <span>${price}</span>
      </div>
      <p>{desc}</p>
    </div>
  </div>
);

export default Menu;
