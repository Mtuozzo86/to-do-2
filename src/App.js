import { useState } from "react";
import TaskList from "./TaskList";
import "./App.css";
import Form from "./Form";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [searched, setSearched] = useState('')
  console.log(searched)

  function handleSearch(e) {
    setSearched(e)
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
    const updatedWhenDeleted = tasks.filter(task => task.id !== params)
    setTasks(updatedWhenDeleted)
  }

  return (
    <div className="App">
      <h2>Amount of Tasks: {tasks.length}</h2>
      <input value={searched} onChange={e => handleSearch(e.target.value)} className="search-input" placeholder="Search Tasks"/>
      <Form
        onHandleSubmit={handleSubmit}
        onHandleChange={handleChange}
        text={text}
      />
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
