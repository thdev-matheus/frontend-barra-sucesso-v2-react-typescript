import styled from "styled-components";
import * as T from "./types";

export const Container = styled.section<T.IContainerProps>`
  @media (min-width: 320px) {
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem 1rem;

    background-color: ${(props) => props.theme.transparentBlack};

    & > p {
      display: flex;
      gap: 0.3rem;

      font-size: 10pt;
      font-weight: bold;

      color: ${(props) => props.theme.white};

      cursor: default;

      & > div {
        transition: 0.5s;

        :hover {
          transform: scale(1.5) rotate(30deg);

          transition: 1.5s;
        }
      }
    }
  }

  @media (min-width: 767px) {
    padding: 1rem 2rem;

    & > p {
      font-size: 12pt;
    }
  }
`;
