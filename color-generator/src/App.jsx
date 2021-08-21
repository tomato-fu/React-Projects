import React, { useState, useEffect } from "react";
import Values from "values.js";
import Color from "./Color";
const App = () => {
  const [error, setError] = useState(false);
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <main>
      <header>
        <h3>Color Generator</h3>
        <form className="form-color" onSubmit={handleSubmit}>
          <input
            className={`${color ? "error" : null}`}
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </header>
      <section className="color-container">
        {list.map((item, index) => (
          <Color key={index} index={index} hexColor={item.hex} {...item} />
        ))}
      </section>
    </main>
  );
};

export default App;
