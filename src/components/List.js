import { useEffect } from "react";

// Styled Components
import {
  ButtonDelete,
  InputRadio,
  ListGroup,
  ListGroupContainer,
  ListGroupItem,
  ListHeader,
} from "./styles/StyledList";

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
          <ListGroupContainer active={task.active} key={task.id}>
            <InputRadio active={task.active} />
            <ListGroupItem onClick={() => completeTask(index)}>
              <span>{task.content}</span>
              <span>{task.date}</span>
              <span>{task.priority}</span>
              <span>{task.category}</span>
            </ListGroupItem>
            <ButtonDelete
              active={task.active}
              onClick={() => deleteTask(task.id)}
            >
              <span>✖</span>
            </ButtonDelete>
          </ListGroupContainer>
        );
      })}
    </ListGroup>
  );
};
export default List;
