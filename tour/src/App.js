import React, { useEffect, useState } from "react";
import Tour from "./Tour";
const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setTours(result);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    getData();
  }, []);
  return (
    <main>
      <article>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>

        {loading && <div className="spinner"></div>}

        <div className="tour-container">
          {tours.map((tour) => (
            <Tour key={tour.id} {...tour} removeTour={removeTour} />
          ))}
        </div>
      </article>
    </main>
  );
};

export default App;
