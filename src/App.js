import { useState } from "react";
import TaskList from "./TaskList";
import "./App.css";
import Form from "./Form";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [searched, setSearched] = useState("");

  // if nothing is being filtered, everything in tasks will be displayed.  Use this variable to display the main tasks
  const filtered = tasks.filter((task) => task.text.includes(searched));

  function handleSearch(e) {
    setSearched(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (text === "") return;
    setTasks((prevState) => [...prevState, { text: text, id: Math.random() }]);
    setText("");
  }

  function handleChange(params) {
    setText(params.target.value);
  }

  function handleDelete(params) {
    const updatedWhenDeleted = tasks.filter((task) => task.id !== params);
    setTasks(updatedWhenDeleted);
  }

  return (
    <div className="App">
      <h2>Amount of Tasks: {tasks.length}</h2>
      <input
        value={searched}
        onChange={(e) => handleSearch(e.target.value)}
        className="search-input"
        placeholder="Search Tasks"
      />
      <Form
        onHandleSubmit={handleSubmit}
        onHandleChange={handleChange}
        text={text}
      />
      <TaskList tasks={filtered} onDelete={handleDelete} />
    </div>
  );
}

export default App;
