import styled from "styled-components";
import * as T from "./types";

export const Container = styled.section<T.IContainerProps>`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100vw;
    min-height: 12.5rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    scroll-margin-top: 5rem;

    background-color: ${(props) => props.theme.backgroundSecondary};
    background-image: url(${(props) => props.bgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 1440px) {
    min-height: 15rem;
  }
`;

export const BoxLeft = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 20%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2rem 1rem;

    & > img {
      height: 100%;

      transition: 0.5s;

      :hover {
        transform: rotate(-10deg) scale(0.9);

        transition: 1.5s;
      }
    }
  }

  @media (min-width: 1440px) {
    width: 30%;
  }
`;

export const BoxRigth = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 60%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    & > p {
      width: 80%;

      font-size: 18pt;
      font-weight: bold;

      text-align: center;

      color: ${(props) => props.theme.textPrimary};

      text-shadow: -5px -5px 0px ${(props) => props.theme.backgroundSecondary},
        -5px 5px 0px ${(props) => props.theme.backgroundSecondary},
        5px -5px 0px ${(props) => props.theme.backgroundSecondary},
        5px 0px 0px ${(props) => props.theme.backgroundSecondary};
    }
  }

  @media (min-width: 1440px) {
    width: 50%;

    & > p {
      font-size: 25pt;
    }
  }

  @media (min-width: 1900px) {
    & > p {
      font-size: 30pt;
    }
  }
`;
