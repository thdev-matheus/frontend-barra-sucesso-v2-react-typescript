import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100vw;
    min-height: 30rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    /* overflow: hidden; */

    background-color: ${(props) => props.theme.backgroundSecondary};
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxLeft = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 40%;
    height: 100%;

    border: 1px solid magenta;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxRight = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 40%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    & > img {
      height: 120%;

      position: relative;
      bottom: -2px;

      transition: 0.8s;

      :hover {
        transform: scale(1.1);
        transform-origin: bottom;

        transition: 1.5s;
      }
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
