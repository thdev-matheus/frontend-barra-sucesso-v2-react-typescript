import styled from "styled-components";
import * as T from "./types";

export const SButton = styled.button<T.ISButtonProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};

  display: flex;
  flex-direction: ${(props) => (props.iconAfter ? "row-reverse" : "row")};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: ${(props) => props.radius || "0.5rem"};

  font-size: ${(props) => props.fontSize || "12pt"};
  font-weight: bold;

  color: ${(props) => props.color || props.theme.black};
  background-color: ${(props) => props.bgColor || props.theme.tertiary};

  cursor: pointer;

  transition: 0.3s;

  & > svg {
    width: ${(props) => props.iconSize || "20px"};
    height: ${(props) => props.iconSize || "20px"};
  }

  :hover {
    color: ${(props) => props.hColor || props.theme.black};
    background-color: ${(props) => props.hBgColor || props.theme.primary};

    transition: 0.8s;
  }

  :active {
    transform: scale(0.9);

    transition: 0s;
  }
`;
