import styled from "styled-components";

export const StyledButtonPlus = styled.button`
  position: absolute;
  bottom: -5%;
  left: 46%;
  background: linear-gradient(180deg, #949efc -5.32%, #3943e9 112.77%)
    border-box;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  font-size: 2.2rem;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 30px #bfbdf4;
  }

  &:active:after {
    box-shadow: 0 0 0 0 #bfbdf4;
    position: absolute;
    border-radius: 4em;
    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }
`;
