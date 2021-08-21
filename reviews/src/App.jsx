import React, { useState } from "react";
import Review from "./Review";
const App = () => {
  const [state, setstate] = useState([]);

  return (
    <main>
      <section>
        <header>
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </header>

        <Review />
      </section>
    </main>
  );
};

export default App;
