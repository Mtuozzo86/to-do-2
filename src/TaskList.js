import React from "react";
import Task from "./Task";

export default function TaskList({ tasks }) {
  console.log(tasks);
  const taskList = tasks.map((task) => <Task text={task} />);
  return <div>{taskList}</div>;
}
