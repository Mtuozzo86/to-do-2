import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, onDelete }) {
  const taskList = tasks.map((task) => (
    <Task id={task.id} text={task.text} onDelete={onDelete} />
  ));
  return <div className="tasklist-section">{taskList}</div>;
}
