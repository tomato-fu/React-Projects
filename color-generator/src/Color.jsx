import React, { useState, useEffect } from "react";
import rgbToHex from "./helper";
const Color = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p>{weight}%</p>
      <p>{hexValue}</p>
      {alert && <p>copied to clipboard</p>}
    </article>
  );
};

export default Color;
