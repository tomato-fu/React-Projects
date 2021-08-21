import React, { useState } from "react";
import Data from "./Data";
import Person from "./Person";
const App = () => {
  const [people, setPeople] = useState(Data);
  const clearAll = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => (
          <Person
            id={person.id}
            name={person.name}
            age={person.age}
            image={person.image}
          />
        ))}
        <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>
      </section>
    </main>
  );
};

export default App;
