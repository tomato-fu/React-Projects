import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Data from "./Data";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = Data[index];

  const nextPerson = () => {
    if (index == Data.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((index) => index + 1);
  };
  const prevPerson = () => {
    if (index === 0) {
      setIndex(Data.length - 1);
      return;
    }
    setIndex((index) => index - 1);
  };
  const randomPerson = () => {
    let number = Math.floor(Math.random() * Data.length);
    while (number === index) {
      number = Math.floor(Math.random() * Data.length);
    }
    setIndex(number);
  };
  return (
    <div className="review-container">
      <div className="img-container">
        <img src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Suprise Me
      </button>
    </div>
  );
};
export default Review;
