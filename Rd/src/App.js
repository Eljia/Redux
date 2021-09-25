import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskListe from "./components/TaskListe";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask />
      <FilterTask />
      <TaskListe />
    </div>
  );
}

export default App;
