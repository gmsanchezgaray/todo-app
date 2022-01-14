import styled from "styled-components";

export const SnackbarContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  display: inline-block;
  width: 100%;
  padding: 10px;
`;

export const SnackbarBackground = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: #7c6fcc;
  padding: 10px 24px;
  border-radius: 4px;

  & p {
    color: #fef8ff;
    font-weight: 600;
  }
  & span {
    display: block;
    color: #e2d3ff;
    font-weight: normal;
    font-size: 0.95rem;
  }

  & button {
    outline: none;
    cursor: pointer;
    border: 1.5px solid #a696eb;
    background-color: #695bbd;
    color: #fef8ff;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      color: #e2d3ff;
      border-color: #fef8ff;
      background-color: #9182d6;
    }
  }
`;
