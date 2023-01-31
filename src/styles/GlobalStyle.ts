import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    border: none;
    outline: none;

    box-sizing: border-box;
    box-shadow: 0 0 0 0;

    ::-webkit-scrollbar {
      display: none;
    }

    --bs-btn-active-color: #2c3e50 !important;
    --bs-btn-active-bg: #1abc9c !important;
    --bs-btn-active-border-color: #1abc9c !important;
    --bs-dropdown-link-active-bg: #1abc9c !important;
    --bs-dropdown-link-active-color: #2c3e50 !important;
    --bs-body-font-family: "Roboto"; 
}

  body {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    overflow: hidden auto;
    
    font-family: "Roboto";
    font-weight: normal;

    

 }
`;
