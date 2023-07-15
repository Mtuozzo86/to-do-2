import { useState } from "react";
import "./App.css";

import TaskList from "./TaskList";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (text === "") return;
    setTasks((prevState) => [...prevState, text]);
    setText("");
  }

  return (
    <div className="App">
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
          />
          <button className="button-submit">Submit</button>
        </form>
      </div>

      <div className="tasklist-section">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
