import React, { useEffect } from "react";
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
    <ul className="list-group">
      {tasksToShow.map((task, index) => {
        return (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <p className={task.active ? "" : "text-decoration-line-through"}>
              {task.content}
            </p>
            <div>
              <button
                className="btn btn-sm btn-outline-success"
                onClick={() => completeTask(index)}
              >
                ✔
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                disabled={task.active}
                onClick={() => deleteTask(task.id)}
              >
                ❌
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
