import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow: hidden scroll;

    scroll-behavior: smooth;

    background-color: ${(props) => props.theme.backgroundPrimary};

    /* & > div {
      width: 40rem;

      border: 1px solid magenta;
      background-color: #000;
      color: #fff;
      font-weight: bold;
      background-color: magenta;
    } */
  }
`;
