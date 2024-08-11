import { useState } from "react";
import "./App.css";

function App() {
  let [todolist, settodolsit] = useState([]);
  let saveToDoList = (event) => {
    let toname = event.target.toname.value;
    if (event.target.toname.value !== "") {
      if (!todolist.includes(toname)) {
        let finaltodolist = [...todolist, toname];
        settodolsit(finaltodolist);
      } else {
        alert("ToDo already exist!!!");
      }
    } else {
      alert("Enter an activity");
    }
    event.target.toname.value = "";

    event.preventDefault();
  };
  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        key={index}
        index={index}
        todolist={todolist}
        settodolsit={settodolsit}
      />
    );
  });
  return (
    <div className="App">
      <h1>ToDO List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" placeholder="Type your activity" />
        <button>Save</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({ value, index, todolist, settodolsit }) {
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i !== index);
    settodolsit(finalData);
  };
  let checkStatus = () => {
    setStatus(!status);
  };
  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {index + 1 + ")"}
      {"   " + value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
