import styled from "styled-components";

export const ListGroup = styled.ul`
  list-style: none;
  margin-top: 1.25rem;
  width: 100%;
  border-bottom: 1px solid #eee;
  overflow: hidden;
`;

export const ListHeader = styled.li`
  color: #161618;
  display: flex;
  justify-content: space-evenly;
  padding: 12px 0px;
  & span:nth-child(1) {
    width: 220px;
  }
`;

export const ListGroupContainer = styled.li`
  position: relative;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #eee;
  color: ${({ active }) => (active ? "#7C7C7C" : "#BFBDF4")};
  cursor: pointer;
  transition: 0.3s;

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
    background-color: #fff;
    transform: translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`;

export const ListGroupItem = styled.div`
  display: flex;
  justify-content: space-around;
  width: 85%;
  padding: 16px 0px;

  & span {
    display: inline-block;
    width: calc(100% / 5);
    text-align: center;

    &:nth-child(1) {
      width: 250px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const InputRadio = styled.div`
  position: absolute;
  top: 34%;
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
  top: 15%;
  right: ${({ active }) => (active ? "-50%" : "-2%")};
  cursor: pointer;
  padding: 8px 0;
  width: 50px;
  outline: none;
  border: 2px solid #d8dade;
  border-radius: 16px 0px 0px 16px;
  background: linear-gradient(180deg, #ffe7df -29.55%, #f59133 120.45%)
    border-box;
  transition: 0.3s;

  &:hover {
    transform: translateX(-6px);
    width: 60px;
  }
  & span {
    color: #fff;
  }
`;
