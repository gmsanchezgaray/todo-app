import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    body{
        font-family: 'Roboto', sans-serif;
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
