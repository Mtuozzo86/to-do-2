import { useState } from "react";
import "./App.css";

import TaskList from "./TaskList";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if(text === '') return
    setTasks((prevState) => [...prevState, text]);
  }

  return (
    <div className="App">
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setText(e.target.value)} type="text" />
          <button>Submit</button>
        </form>
      </div>

      <div>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
