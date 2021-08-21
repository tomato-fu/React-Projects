import React, { useState } from "react";
import Data from "./Data";

const App = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let amount = count;
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(Data.slice(0, amount));
  }
  return (
    <main>
      <section>
        <h3>tired of boring lorem ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amout">paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn">generate</button>
        </form>
        <article>
          {text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </article>
      </section>
    </main>
  );
};

export default App;
