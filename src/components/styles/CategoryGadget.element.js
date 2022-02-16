import styled from "styled-components";

export const WrapperCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0;

  & p {
    font-size: 0.8rem;
    line-height: 0.7rem;
    margin-top: 4px;
  }
`;

export const IconCategory = styled.div`
  background-color: #8d97fb;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 80%;
    height: 80%;
  }
`;
