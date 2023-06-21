import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(" ");
  const [item, setItem] = useState([]);
  function handleChange(event) {
    const newvalue = event.target.value;
    setInputText(newvalue);
  }
  function addItem() {
    setItem((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText(" ");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoitem) => {
            return <li>{todoitem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
