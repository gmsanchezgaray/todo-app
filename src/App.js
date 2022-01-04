import { useState, useEffect } from "react";

import Form from "./components/Form";
import List from "./components/List";
import Tab from "./components/Tab";

// Styled Components
import { GlobalStyles } from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";

function App() {
  const getLocalData = () => {
    let data = localStorage.getItem("tasks");

    if (data) {
      return JSON.parse(localStorage.getItem("tasks"));
    } else {
      return [];
    }
  };

  const [tasks, setTasks] = useState(getLocalData);
  const [tasksToShow, setTasksToShow] = useState([]);
  const [inputValue, setInputValue] = useState({});
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <GlobalStyles />
      <Container>
        {/* <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          tasks={tasks}
          setTasks={setTasks}
        /> */}
        <Tab
          filter={filter}
          setFilter={setFilter}
          tasks={tasks}
          setTasksToShow={setTasksToShow}
        />
        {tasks.length === 0 && <p>Esta vacia esta wea</p>}
        <List
          tasks={tasks}
          tasksToShow={tasksToShow}
          filter={filter}
          setTasksToShow={setTasksToShow}
          setTasks={setTasks}
        />
      </Container>
    </>
  );
}

export default App;
