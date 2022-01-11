import styled from "styled-components";

export const StyledTab = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
`;

export const NavTabs = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 8px 16px;
  border-bottom: ${(props) =>
    props.active ? "2px solid #605cff" : "2px solid transparent"};
`;

export const NavLink = styled.button`
  font-family: "Roboto", sans-serif;
  border: none;
  color: ${({ active }) => (active ? "#605cff" : "#3a3a3a")};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px 16px;
  cursor: pointer;
  background-color: transparent;
  opacity: ${({ active }) => (active ? "1" : "0.7")};
  transition: all 300ms ease-in-out;
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  &:hover {
    opacity: 1;
  }

  @keyframes gradient {
    0% {
      background: radial-gradient(
        circle at center,
        rgba(229, 229, 229, 0) 0%,
        #fff 0%,
        #fff 100%
      );
    }
    25% {
      background: radial-gradient(
        circle at center,
        rgba(229, 229, 229, 0.3) 24%,
        #fff 25%,
        #fff 100%
      );
    }
    50% {
      background: radial-gradient(
        circle at center,
        rgba(229, 229, 229, 0.5) 49%,
        #fff 50%,
        #fff 100%
      );
    }
    75% {
      background: radial-gradient(
        circle at center,
        rgba(229, 229, 229, 0.8) 74%,
        #fff 75%,
        #fff 100%
      );
    }
    100% {
      color: #fff;
      background: radial-gradient(
        circle at center,
        #e5e5e5 99%,
        #fff 100%,
        #fff 100%
      );
    }
  }
  &:active {
    animation: gradient 200ms;
  }
`;

export const NavSlider = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  display: block;
  background: #eeeefe;
  border-radius: 2px;
`;

const handlePositionBar = (typeOfCategory) => {
  switch (typeOfCategory) {
    case "ACTIVE":
      return "40%";
    case "COMPLETED":
      return "60%";
    default:
      return "26%";
  }
};

export const SliderActive = styled.div`
  position: absolute;
  top: 0;
  margin-left: ${({ typeOfCategory }) => handlePositionBar(typeOfCategory)};
  width: 10%;
  height: 3px;
  background: #605cff;
  border-radius: 3px;
  transition: all 500ms ease-in-out;
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
`;
