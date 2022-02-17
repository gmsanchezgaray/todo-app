import styled from "styled-components";
import { device } from "./device";

export const ListWrapper = styled.div`
  position: relative;
  background-color: #efefef;
  width: 100vmin;
  height: calc(100% + 2.5rem);
  border-radius: 8px;
  max-width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #e5e5e5;
    border-radius: 4px 0 4px 0;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: #8d97fb;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #505aee;
  }

  @media ${device.mobileM} {
    width: 100%;
    min-width: 25.5rem;
    margin: 0 auto;
  }
  @media ${device.desktop} {
    width: 100%;
  }
`;

export const ListGroup = styled.ul`
  list-style: none;
  margin-top: 1.25rem;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  overflow: hidden;
`;

export const ListHeader = styled.li`
  color: #9d9d9d;
  display: flex;
  font-size: 0.9rem;
  justify-content: space-evenly;
  padding: 12px 0px;
  border-bottom: 1px solid #d9d9d9;
  text-transform: capitalize;

  & span:nth-child(1) {
    width: 13.75rem;
  }

  @media ${device.mobileM} {
    & span {
      &:nth-child(1) {
        width: 11rem;
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(4) {
        margin-right: 0.5rem;
      }
    }
  }
  @media ${device.desktop} {
    & span {
      &:nth-child(3) {
        margin-right: 1rem;
      }
      &:nth-child(4) {
        margin-right: 2rem;
      }
    }
  }
`;

export const ListGroupContainer = styled.li`
  position: relative;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #d9d9d9;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
  background-color: ${({ active }) => (active ? "transparent" : "#e1e1e1")};

  @keyframes opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  animation: opacity 500ms;

  &:hover {
    z-index: 5;
    background-color: ${({ active }) => (active ? "#fff" : "#d9d9d9")};

    transform: translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`;

export const ListGroupItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 85%;
  padding: 16px 0px;

  & span {
    display: inline-block;
    width: calc(100% / 5);
    text-align: center;
    color: ${({ active }) => (active ? "#7C7C7C" : "#8d97fb")};
    text-decoration: ${({ active }) => (active ? "none" : "line-through")};

    &:nth-child(1) {
      width: 250px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &:nth-child(2) {
      white-space: nowrap;
      width: auto;
      display: block;
    }
    &:nth-child(3) {
      width: auto;
      text-decoration: none;
      color: #e5e5e5;
    }
    &:nth-child(4) {
      text-decoration: none;
      color: #7c7c7c;
    }
  }

  @media ${device.mobileM} {
    & span {
      &:nth-child(1) {
        width: 16rem;
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(4) {
        margin-right: 1rem;
      }
    }
  }
  @media ${device.desktop} {
    & span {
      &:nth-child(3) {
        margin-left: 1rem;
      }
    }
  }
`;
const handleColorType = (color) => {
  switch (color) {
    case "1":
      return { bg: "#dc2551", bxSh: "inset 10px 10px 16px #eb6084" };
    case "2":
      return { bg: "#ea4041", bxSh: "inset 10px 10px 16px #ea7d80" };
    case "3":
      return { bg: "#fc6e31", bxSh: "inset 10px 10px 16px #faa07a" };
    case "4":
      return { bg: "#26aa82", bxSh: "inset 10px 10px 16px #62bfa9" };
    default:
      return { bg: "#dc2551", bxSh: "inset 10px 10px 16px #eb6084" };
  }
};

export const Badge = styled.span`
  display: block;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ color }) => handleColorType(color).bg};
  box-shadow: ${({ color }) => handleColorType(color).bxSh};
  font-size: 0.9rem;
  @media ${device.mobileM} {
    font-size: 0.8rem;
    margin-right: 0.5rem;
  }
`;

export const InputRadio = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: 1.5%;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background: linear-gradient(
        ${({ active }) =>
          active ? "white, white" : "180deg, #3943e9 -5.32%, #949efc 112.77%"}
      )
      padding-box,
    linear-gradient(180deg, #949efc -5.32%, #3943e9 112.77%) border-box;
  border-radius: 50em;
  border: 4px solid transparent;
  transition: 0.3s;
`;

export const ButtonDelete = styled.button`
  position: absolute;
  top: calc(50% - 24px);
  right: ${({ active }) => (active ? "-50%" : "-2%")};
  cursor: pointer;
  height: 48px;
  width: 50px;
  outline: none;
  border: none;
  border-radius: 16px 0px 0px 16px;
  background: linear-gradient(180deg, #ffe7df -5.32%, #f59133 112.77%);
  transition: 0.3s;

  &:hover {
    transform: translateX(-6px);
    width: 60px;
  }
  & span {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 14px 0px 0px 14px;
    box-shadow: inset 2px 2px 4px rgba(21, 23, 49, 0.2),
      inset -2px -2px 4px rgba(255, 231, 223, 0.3);
    height: 85%;
    width: 85%;

    & svg {
      margin: auto 0;
      width: 1.85rem;
      height: 1.85rem;
    }
  }
`;
