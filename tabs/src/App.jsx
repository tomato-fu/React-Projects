import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [value, setvalue] = useState(0);
  useEffect(() => {
    const getData = async () => {
      try {
        setloading(true);
        const response = await fetch(url);
        const results = await response.json();
        setjobs(results);
        setloading(false);
      } catch (error) {
        seterror(true);
      }
    };
    getData();
  }, [jobs]);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="asd">
        <h1>Error...</h1>
      </section>
    );
  }

  // const { company, dates, duties, title } = jobs[value];

  return (
    <main>
      <section>
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>

        <div className="content-container">
          <div className="btn-container">
            {jobs.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setvalue(index)}
                className={`job-btn ${index === value}`}
              >
                {item.company}
              </button>
            ))}
          </div>

          {/* <article>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </article> */}
        </div>
      </section>
    </main>
  );
};

export default App;
