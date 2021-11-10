import { useState } from "react";

import Form from "./components/Form";
import List from "./components/List";
import Tab from "./components/Tab";

function App() {
  const [tasks, setTasks] = useState([]);
  const [tasksToShow, setTasksToShow] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("ALL");

  return (
    <div className="container">
      <h2 className="text-center">#todoApp</h2>
      <div className="row justify-content-center text-center">
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          tasks={tasks}
          setTasks={setTasks}
        />
        <Tab
          setFilter={setFilter}
          tasks={tasks}
          setTasksToShow={setTasksToShow}
        />
        <List
          tasks={tasks}
          tasksToShow={tasksToShow}
          filter={filter}
          setTasksToShow={setTasksToShow}
          setTasks={setTasks}
        />
      </div>
    </div>
  );
}

export default App;
