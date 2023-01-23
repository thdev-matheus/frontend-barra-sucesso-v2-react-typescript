import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    border: none;
    outline: none;

    box-sizing: border-box;
    box-shadow: 0 0 0 0;
}

  body {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    overflow: hidden auto;
    
    font-weight: normal;
    font-family: "Roboto";

    ::-webkit-scrollbar {
      display: none;
    }

 }
`;
