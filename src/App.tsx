import React, {useState} from 'react';
import "./App.css";
import { Todolist } from "./Todolist";
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

function App() {

let [tasks, setTasks] = useState([
  { id: v1(), title: "HTML&CSS", isDone: true },
  { id: v1(), title: "JS", isDone: true },
  { id: v1(), title: "ReactJs", isDone: false },
  { id: v1(), title: "Redux", isDone: false },
  { id: v1(), title: "GraphQL", isDone: false },
]);
console.log(tasks);

function removeTask(id: string){
 let filtredTasks = tasks.filter(t => t.id !== id);
 setTasks(filtredTasks);
}

function addTask(title: string) {
  let newTask = {
    id: v1(),
    title: title,
    isDone: false,
  };
  let newTasks = [newTask, ...tasks];
  setTasks(newTasks);
}

let [filter, setFilter] = useState<FilterValuesType>("all");

let tasksForTodolist = tasks;

if (filter === "active"){
  tasksForTodolist = tasks.filter(t => t.isDone === false)
}
if (filter === "completed"){
  tasksForTodolist = tasks.filter(t => t.isDone === true)
}

function changeFilter(value: FilterValuesType){
  setFilter(value);
  }

  return (
    <div className="App">
      <Todolist
       title="What to learn"
       tasks={tasksForTodolist}
       removeTask={removeTask}
       changeFilter={changeFilter} 
       addTask={addTask}
       />
      
    </div>
  );
}

export default App;
