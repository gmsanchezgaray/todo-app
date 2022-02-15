import styled from "styled-components";

export const MessageBox = styled.div`
  width: 80%;
  margin: 10px auto;
  background-color: #ffd0cb;
  max-height: 140px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  display: ${({ error }) => (error ? "block" : "none")};
  opacity: ${({ error }) => (error ? "1" : "0")};
  transition: opacity 0.15s linear;

  & h5 {
    padding: 20px 20px 10px 20px;
    color: #3c2e2c;
  }

  & ul {
    margin: 0px 20px 20px 20px;
    & li {
      list-style: none;
      position: relative;
      padding: 3px 0 2px 25px;
      margin: 0 auto;
      font-size: 0.9rem;
      color: #5a4440;
      /* opacity: 0.87; */

      &::before {
        content: "";
        position: absolute;
        height: 12px;
        border-left: 3px solid #e9594c;
        transform: rotate(45deg);
        top: 5px;
        left: 10px;
      }

      &::after {
        content: "";
        position: absolute;
        height: 12px;
        border-left: 3px solid #e9594c;
        transform: rotate(-45deg);
        top: 5px;
        left: 10px;
      }
    }
  }
`;
