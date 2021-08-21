import React, { useState, useEffect } from "react";
import Data from "./Data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);
  return (
    <main>
      <section>
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>

        <div className="content-container">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = "nextSlide";
            if (personIndex === index) position = "activeSlide";
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            )
              position = "lastSlied";
            return (
              <article className={position} key={id}>
                <img src={image} alt={title} />
                <h4>{name}</h4>
                <p>{title}</p>
                <p>{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
