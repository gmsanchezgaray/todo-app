import { useEffect } from "react";

// Component
import CategoryGadget from "./CategoryGadget";
// Priorities array
import { priorities } from "../data/objects.js";
import { arrayNameInput } from "../data/arrays.js";

// Styled Components
import {
  Badge,
  ButtonDelete,
  InputRadio,
  ListWrapper,
  ListGroup,
  ListGroupContainer,
  ListGroupItem,
  ListHeader,
} from "./styles/List.elements";

// Asset
import { ReactComponent as TrashIcon } from "../assets/Trash-icon.svg";

const List = ({ tasks, setTasksToShow, tasksToShow, filter, setTasks }) => {
  //Edit task status
  const completeTask = (indexArray) => {
    const newTodos = [...tasks];
    newTodos[indexArray].active = !newTodos[indexArray].active;
    setTasks(newTodos);
  };

  //Delete the task and create a new Array
  const deleteTask = (indexNumber) => {
    const newTasks = tasks.filter((task) => task.id !== indexNumber);
    setTasks(newTasks);
  };

  let arrayTasks = {
    COMPLETED: tasks.filter((task) => task.active === false),
    ACTIVE: tasks.filter((task) => task.active === true),
    ALL: tasks,
  };

  //Show the tasks respective to the filter
  useEffect(() => {
    setTasksToShow(arrayTasks[filter]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks, filter]);

  return (
    <ListWrapper>
      <ListGroup>
        <ListHeader>
          {arrayNameInput.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </ListHeader>
        {tasksToShow.map((task, index) => {
          //Destructuring
          const { id, active, description, deadline, priority, category } =
            task;
          return (
            <ListGroupContainer active={active} key={id}>
              <InputRadio active={active} />
              <ListGroupItem
                active={active}
                onClick={() => completeTask(index)}
              >
                <span>{description}</span>
                <span>{deadline}</span>
                <Badge color={priority}>{priorities[priority]}</Badge>
                <span>
                  <CategoryGadget categoryIndex={category} />
                </span>
              </ListGroupItem>
              <ButtonDelete active={active} onClick={() => deleteTask(id)}>
                <span>
                  <TrashIcon />
                </span>
              </ButtonDelete>
            </ListGroupContainer>
          );
        })}
      </ListGroup>
    </ListWrapper>
  );
};
export default List;
