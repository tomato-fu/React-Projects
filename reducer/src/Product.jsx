import React from "react";
import { useGlobalContext } from "./context";
const Product = ({ title, price, img, amount, id }) => {
  const { removeItem, increase, decrease } = useGlobalContext();
  return (
    <div className="single-product">
      <img src={img} alt={title} />

      <div className="product-info">
        <h4>{title}</h4>
        <p>${price}</p>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>

      <div className="product-buttons">
        <button onClick={() => increase(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        <p>{amount}</p>
        <button onClick={() => decrease(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Product;
