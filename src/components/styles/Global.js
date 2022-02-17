import styled, { createGlobalStyle } from "styled-components";
import { device } from "./device";

export const GlobalStyles = createGlobalStyle`

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    body{
      font-family: 'Poppins';
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        min-height: 100vh;
        overflow: hidden;
        background: linear-gradient(125.42deg, #CCD3EE -6.01%, #605CFF 109.94%);
    }

    p{
        line-height: 1.5;
    }

`;

export const Container = styled.div`
  position: relative;
  width: 100vmin;
  height: 33.5rem;
  border-radius: 8px;
  max-width: 100%;
  background-color: #efefef;
  padding: 2.5rem 0px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;

  @media ${device.mobileM} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 45rem;
  }

  @media ${device.desktop} {
    width: 55rem;
  }
`;

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
  z-index: 99;
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
