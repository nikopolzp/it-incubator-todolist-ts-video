import "./App.css";
import { TaskType, Todolist } from "./Todolist";

function App() {
  let tasks1: Array<TaskType> = [
    { id: 1, title: "CSS", isDone: true },
    { id: 1, title: "JS", isDone: true },
    { id: 1, title: "REACT", isDone: false },
  ];
  let tasks2: Array<TaskType> = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 1, title: "How I met your mother", isDone: true },
    { id: 1, title: "Mister Bean", isDone: false },
  ];
  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks1} />
      <Todolist title="Movies" tasks={tasks2} />
    </div>
  );
}

export default App;
