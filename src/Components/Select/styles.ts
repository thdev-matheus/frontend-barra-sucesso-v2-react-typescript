import styled from "styled-components";
import * as T from "./types";

export const Container = styled.section<T.IContainerProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding-top: 1.5rem;

  & > span {
    padding-left: 1rem;
    font-size: 12pt;
    font-weight: bold;

    color: ${(props) => props.color || props.theme.textPrimary};
  }

  & > div {
    min-width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "2.5rem"};

    & > button {
      min-width: ${(props) => props.width || "100%"};
      height: ${(props) => props.height || "2rem"};

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      border: 1px solid ${(props) => props.color || props.theme.textPrimary};
      border-radius: ${(props) => props.radius || "0.8rem"};

      font-size: 13pt;
      font-weight: bold;

      color: ${(props) => props.color || props.theme.textPrimary};
      background-color: transparent;

      :hover {
        border: 1px solid ${(props) => props.color || props.theme.textPrimary};

        color: ${(props) => props.color || props.theme.textPrimary};
        background-color: transparent;
      }

      :focus {
        border: 1px solid ${(props) => props.color || props.theme.textPrimary};

        color: ${(props) => props.color || props.theme.textPrimary};
        background-color: transparent;
      }
    }

    & > div {
      width: 20rem;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.8rem;

      z-index: 9000;

      padding: 1rem;
      margin-top: 1rem;

      border-radius: 0.8rem;
      border: 2px solid ${(props) => props.theme.textPrimary};

      background-color: ${(props) => props.theme.backgroundPrimary};

      & > a {
        padding: 0.5rem 1rem;

        border-radius: 0.5rem;

        font-size: 12pt;
        font-weight: bold;

        text-decoration: none;

        box-shadow: 2px 2px 5px 0 ${(props) => props.theme.backgroundTertiary};

        color: ${(props) => props.theme.textPrimary};
        background-color: ${(props) => props.theme.backgroundSecondary};
      }
    }
  }
`;
