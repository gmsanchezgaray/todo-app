import { useEffect } from "react";

// Styled Components
import {
  Badge,
  ButtonDelete,
  InputRadio,
  ListGroup,
  ListGroupContainer,
  ListGroupItem,
  ListHeader,
} from "./styles/List.elements";

import { ReactComponent as TrashIcon } from "../assets/Trash-icon.svg";
import CategoryGadget from "./CategoryGadget";

const List = ({ tasks, setTasksToShow, tasksToShow, filter, setTasks }) => {
  const completeTask = (indexArray) => {
    const newTodos = [...tasks];
    newTodos[indexArray].active = !newTodos[indexArray].active;
    setTasks(newTodos);
  };
  const deleteTask = (indexNumber) => {
    const newTasks = tasks.filter((task) => task.id !== indexNumber);
    setTasks(newTasks);
  };

  let arrayTasks;
  switch (filter) {
    case "COMPLETED":
      arrayTasks = tasks.filter((task) => task.active === false);
      break;
    case "ACTIVE":
      arrayTasks = tasks.filter((task) => task.active === true);
      break;
    default:
      arrayTasks = tasks;
  }

  const priorities = {
    1: "Urgent",
    2: "Important",
    3: "Normal",
    4: "For later",
  };

  useEffect(() => {
    setTasksToShow(arrayTasks);
  }, [tasks, filter]);

  return (
    <ListGroup>
      <ListHeader>
        <span>Description</span>
        <span>Deadline</span>
        <span>Priority</span>
        <span>Category</span>
      </ListHeader>
      {tasksToShow.map((task, index) => {
        return (
          <ListGroupContainer key={task.id}>
            <InputRadio active={task.active} />
            <ListGroupItem
              active={task.active}
              onClick={() => completeTask(index)}
            >
              <span>{task.content}</span>
              <span>{task.date}</span>
              <Badge color={task.priority}>{priorities[task.priority]}</Badge>
              <span>
                <CategoryGadget categoryIndex={task.category} />
              </span>
            </ListGroupItem>
            <ButtonDelete
              active={task.active}
              onClick={() => deleteTask(task.id)}
            >
              <span>
                <TrashIcon />
              </span>
            </ButtonDelete>
          </ListGroupContainer>
        );
      })}
    </ListGroup>
  );
};
export default List;
