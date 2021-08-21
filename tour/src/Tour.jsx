import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [more, setMore] = useState(false);

  return (
    <div className="sing-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p>
          {more ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setMore(!more)}>
            {more ? "show less" : "show more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
