// Styled Components
import {
  NavItem,
  NavLink,
  NavSlider,
  NavTabs,
  SliderActive,
  StyledTab,
} from "./styles/Tab.elements";
//Array for Header Info
import { arrayStatusTasks } from "../data/arrays";

const Tab = ({ filter, setFilter }) => {
  //Show tasks by filter
  const showSelectedTasks = (event) => {
    setFilter(event.target.name.toUpperCase());
  };
  return (
    <StyledTab>
      <NavTabs>
        <>
          {arrayStatusTasks.map((item, index) => {
            return (
              <NavItem key={index}>
                <NavLink
                  name={item}
                  active={filter === item.toUpperCase()}
                  onClick={showSelectedTasks}
                >
                  {item}
                </NavLink>
              </NavItem>
            );
          })}
        </>
      </NavTabs>
      <NavSlider>
        <SliderActive typeOfCategory={filter} />
      </NavSlider>
    </StyledTab>
  );
};

export default Tab;
