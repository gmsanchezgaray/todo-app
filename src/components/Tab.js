import React from "react";

const Tab = ({ filter, setFilter, tasks, setTasksToShow }) => {
  const showActiveTasks = () => {
    const activeTasks = tasks.filter((task) => task.active === true);
    setTasksToShow(activeTasks);
    setFilter("ACTIVE");
  };

  const showCompletedTasks = () => {
    const completedTasks = tasks.filter((task) => task.active === false);
    setTasksToShow(completedTasks);
    setFilter("COMPLETED");
  };

  const showAllTasks = () => {
    setFilter("ALL");
  };
  return (
    <div className="mb-3">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={"nav-link " + (filter === "ALL" && "active")}
            aria-current="page"
            onClick={showAllTasks}
          >
            All
          </button>
        </li>
        <li className="nav-item">
          <button
            className={"nav-link " + (filter === "ACTIVE" && "active")}
            onClick={showActiveTasks}
          >
            Active
          </button>
        </li>
        <li className="nav-item">
          <button
            className={"nav-link " + (filter === "COMPLETED" && "active")}
            onClick={showCompletedTasks}
          >
            Completed
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Tab;
