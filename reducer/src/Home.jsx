import React from "react";
import Product from "./Product";

import { useGlobalContext } from "./context";

const Home = () => {
  const { clearCart, cart, total } = useGlobalContext();
  return (
    <section>
      <header>
        <h2>Your bag</h2>
      </header>

      <div>
        {cart.map((item) => (
          <Product {...item} key={item.id} />
        ))}
      </div>

      <footer>
        <div className="cart-total">
          <h4>
            Total
            <span>${total}</span>
          </h4>
        </div>
        <button className="clear-btn btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default Home;
