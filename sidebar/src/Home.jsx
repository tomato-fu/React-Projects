import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { menu, setMenu, modal, setModal } = useGlobalContext();

  return (
    <main>
      <button className="menu-btn" onClick={() => setMenu(!menu)}>
        <FaBars />
      </button>
      <button className="modal-btn" onClick={() => setModal(!modal)}>
        show modal
      </button>
    </main>
  );
};

export default Home;
