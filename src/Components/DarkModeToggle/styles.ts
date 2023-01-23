import styled from "styled-components";
import { IDarkModeButtonProps } from "./types";

export const Container = styled.div<IDarkModeButtonProps>`
  cursor: pointer;

  & > svg {
    width: ${(props) => props.width || "2rem"};
    height: ${(props) => props.height || "2rem"};

    border-radius: ${(props) => props.borderRadius};

    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color || props.theme.lightGray};
  }
`;
