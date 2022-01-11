import React from "react";

// Styled Components
import {
  NavItem,
  NavLink,
  NavSlider,
  NavTabs,
  SliderActive,
  StyledTab,
} from "./styles/Tab.elements";

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
    <StyledTab>
      <NavTabs>
        <NavItem>
          <NavLink active={filter === "ALL" && true} onClick={showAllTasks}>
            All
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={filter === "ACTIVE" && true}
            onClick={showActiveTasks}
          >
            Active
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={filter === "COMPLETED" && true}
            onClick={showCompletedTasks}
          >
            Completed
          </NavLink>
        </NavItem>
      </NavTabs>
      <NavSlider>
        <SliderActive typeOfCategory={filter} />
      </NavSlider>
    </StyledTab>
  );
};

export default Tab;
