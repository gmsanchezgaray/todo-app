import styled from "styled-components";
import { device } from "./device";

export const StyledForm = styled.form`
  position: absolute;
  top: 10%;
  left: calc(50% - 45vmin);
  width: 90vmin;
  z-index: ${({ showModal }) => (showModal ? "105" : "-1")};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const BackgroundModal = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: ${({ showModal }) => (showModal ? "0.4" : "0")};
  transition: 0.5s;
  z-index: ${({ showModal }) => (showModal ? "100" : "-1")};
`;

export const HeaderForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #605cff;
  color: #f8f8f8;
  padding: 14px 0px 8px 0px;
  border-radius: 4px 4px 0px 0px;

  & p {
    margin-left: 20px;
    font-size: 1.04rem;
    letter-spacing: 0.5px;
  }
  & button {
    margin-right: 20px;
    color: #fff;
    font-size: 1rem;
    background: transparent;
    cursor: pointer;
    outline: none;
    border: none;
    opacity: 0.6;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
  }
`;

export const FormBody = styled.div`
  background: #f8f8f8;
  padding-top: 1rem;
  border-radius: 0px 0px 4px 4px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & label {
    margin-bottom: 0.5rem;
    display: inline-block;
    font-size: 0.9rem;
    font-weight: 600;
    opacity: 0.7;
  }
`;

export const InputGroup = styled.div`
  display: inline-block;
  &:nth-child(1) {
    grid-column: 1/4;
  }
  height: 84px;
  padding: 2px 12px;

  //Helper text
  & span {
    height: 16px;
    width: 9rem;
    display: block;
    visibility: ${({ hasError }) => (hasError ? "visible" : "hidden")};
    color: #cc2104;
    font-size: 0.75rem;
    margin-left: 0.5rem;
    white-space: nowrap;
  }
  @media ${device.tablet} {
    grid-column: 1/4;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  min-height: 40px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid ${({ hasError }) => (hasError ? "#CC2104" : "#ced4da")};
  border-radius: 0.25rem;

  &:focus {
    background-color: #fff;
    border-color: #605cff;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(96 92 255 / 25%);
  }
`;

export const Select = styled.select`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #212529;
  background-color: #fff;
  width: 100%;
  min-height: 40px;

  padding: 0.475rem 0.75rem;
  border: 1px solid ${({ hasError }) => (hasError ? "#CC2104" : "#ced4da")};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    background-color: #fff;
    border-color: #605cff;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(96 92 255 / 25%);
  }
`;

export const FormFooter = styled.div`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  grid-column: 1/4;

  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  background-color: ${({ primary }) => (primary ? "#605CFF" : "transparent")};
  color: ${({ primary }) => (primary ? "#fff" : "#605CFF")};
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid ${({ primary }) => (primary ? "#fff" : "#605CFF")};
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  margin: 0 0.25rem;
  transition: 0.3s;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#4944FF" : "#CBC9FD")};
  }
`;
