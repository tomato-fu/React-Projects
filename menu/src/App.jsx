import React, { useState } from "react";
import Data from "./Data";
import Category from "./Category";
import Menu from "./Menu";
const allCategories = ["all", ...new Set(Data.map((item) => item.category))];
const App = () => {
  const [state, setState] = useState(Data);
  const filterItems = (category) => {
    if (category === "all") {
      setState(Data);
      return;
    }
    const newItems = Data.filter((item) => item.category === category);
    setState(newItems);
  };
  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <div className="btn-container">
          {allCategories.map((category, index) => (
            <Category name={category} key={index} filterItem={filterItems} />
          ))}
        </div>

        <div className="menu-container">
          {state.map((item) => (
            <Menu {...item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
