import { useState, useEffect } from "react";

// Components
import Form from "./components/Form";
import List from "./components/List";
import Tab from "./components/Tab";
import Snackbar from "./components/Snackbar";

// Styled Components & Font
import { GlobalStyles } from "./components/styles/Global";
import { Container } from "./components/styles/Global";
import { StyledButtonPlus } from "./components/styles/Global";
import { BackgroundModal } from "./components/styles/Form.elements";
import WebFont from "webfontloader";
import { getLocalData } from "./utils/functions";

const App = () => {
  const [tasks, setTasks] = useState(getLocalData()); //all the tasks
  const [tasksToShow, setTasksToShow] = useState([]); //tasks filtered by a value
  const [inputValue, setInputValue] = useState({
    description: "",
    category: "0",
    priority: "0",
    deadline: "",
  }); //initial task values
  const [filter, setFilter] = useState("ALL");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); //add a new task for the localStorage

  const showForm = () => {
    setShowModal(!showModal);
  };

  //import font via webfontloader
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins"],
      },
    });
  }, []);

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
};

export default App;
