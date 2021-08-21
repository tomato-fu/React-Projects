import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Alert from "./Alert";

const getDataFromLocal = () => {
  let list = localStorage.getItem("list");
  if (list) return (list = JSON.parse(localStorage.getItem("list")));
  return [];
};

const App = () => {
  const [stuff, setStuff] = useState("");
  const [list, setList] = useState(getDataFromLocal());

  const [isEditing, setIsEditing] = useState(false);
  const [EditID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });
  function removeStuff(id) {
    setList(list.filter((item) => item.id !== id));
    setAlert({
      show: true,
      type: "error",
      message: "Item has been removed",
    });
  }

  function removeAlert() {
    setAlert({
      show: false,
      type: "",
      message: "",
    });
  }

  function editStuff(id) {
    const itemFound = list.find((item) => item.id === id);
    setStuff(itemFound.name);
    setIsEditing(true);
    setEditID(id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (stuff === "") {
      setAlert({
        show: true,
        type: "error",
        message: "Enter a valid value",
      });
      return;
    }
    if (stuff && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === EditID) return { ...item, name: stuff };
          return item;
        })
      );
      setAlert({
        show: true,
        type: "success",
        message: "The value has been changed",
      });
      setEditID(null);
      setIsEditing(false);
      setStuff("");
      return;
    }
    let newId = Math.floor(Math.random() * 10000);
    let newStuff = { name: stuff, id: newId };
    setList([...list, newStuff]);

    setAlert({
      show: true,
      type: "success",
      message: "Add a new item to list",
    });
    setStuff("");
    console.log(list);
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <main>
      <section>
        {alert.show && (
          <Alert list={list} {...alert} removeAlert={removeAlert} />
        )}
        <h3>Grocery Bud</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="e.g. eggs"
            onChange={(e) => setStuff(e.target.value)}
            value={stuff}
          />
          <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
        </form>

        <div className="bud-container">
          {list.map((item, index) => (
            <article key={index}>
              <p>{item.name}</p>
              <div className="btn-container">
                <button className="edit" onClick={() => editStuff(item.id)}>
                  <FaEdit />
                </button>
                <button className="delete" onClick={() => removeStuff(item.id)}>
                  <FaTrash />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
