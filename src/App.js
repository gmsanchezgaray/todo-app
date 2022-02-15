import { useState, useEffect } from "react";

import Form from "./components/Form";
import List from "./components/List";
import Tab from "./components/Tab";

// Styled Components
import { GlobalStyles } from "./components/styles/Global";
import { Container } from "./components/styles/Global";
import { StyledButtonPlus } from "./components/styles/Global";
import { BackgroundModal } from "./components/styles/Form.elements";
import Snackbar from "./components/Snackbar";

function App() {
  const getLocalData = () => {
    let data = localStorage.getItem("tasks");

    if (data) {
      return JSON.parse(localStorage.getItem("tasks"));
    } else {
      return [];
    }
  };

  let today = new Date().toISOString().slice(0, 10);

  const [tasks, setTasks] = useState(getLocalData);
  const [tasksToShow, setTasksToShow] = useState([]);
  const [inputValue, setInputValue] = useState({
    content: "",
    category: "0",
    priority: "0",
    date: today,
  });
  const [filter, setFilter] = useState("ALL");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const showForm = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <GlobalStyles />
      <BackgroundModal showModal={showModal} />

      <Container>
        {showModal ? (
          <Form
            inputValue={inputValue}
            setInputValue={setInputValue}
            tasks={tasks}
            setTasks={setTasks}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        ) : null}
        <Tab
          filter={filter}
          setFilter={setFilter}
          tasks={tasks}
          setTasksToShow={setTasksToShow}
        />
        {tasks.length === 0 ? (
          <Snackbar showForm={showForm} />
        ) : (
          <List
            tasks={tasks}
            tasksToShow={tasksToShow}
            filter={filter}
            setTasksToShow={setTasksToShow}
            setTasks={setTasks}
          />
        )}
        <StyledButtonPlus onClick={showForm}>+</StyledButtonPlus>
      </Container>
    </>
  );
}

export default App;
