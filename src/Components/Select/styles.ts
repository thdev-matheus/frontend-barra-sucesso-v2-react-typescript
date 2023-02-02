import styled from "styled-components";
import * as T from "./types";
import { motion } from "framer-motion";

export const Container = styled.section<T.IContainerProps>`
  width: 100%;
  & > span {
    padding-left: 1rem;
    font-size: 12pt;
    font-weight: bold;

    color: ${(props) => props.color || props.theme.textPrimary};
  }
`;

export const Dropdown = styled.div<T.IContainerProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "4rem"};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Toggle = styled.div<T.IContainerProps>`
  min-width: 100%;
  min-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 0;

  border-radius: ${(props) => props.radius || "0.8rem"};

  background-color: ${(props) => props.bgColor || props.theme.tertiary};
  color: ${(props) => props.color || props.theme.black};

  font-size: ${(props) => props.fontSize || "14pt"};
  font-weight: bold;

  cursor: pointer;

  transition: 0.8s;

  :hover {
    background-color: ${(props) => props.hBgColor || props.theme.primary};
    color: ${(props) => props.hColor || props.theme.black};

    transition: 1.5s;
  }
`;

export const Menu = styled(motion.div)<T.IContainerProps>`
  min-width: ${(props) => props.width || "100%"};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;

  padding: 1.5rem;
  margin: ${(props) => props.theme.margin || ".5rem"};

  position: absolute;
  top: ${(props) => props.height || "4rem"};
  z-index: 9999;

  border-radius: 1rem 3rem;

  background-color: ${(props) => props.theme.backgroundPrimary};

  box-shadow: 2px 2px 5px 0 ${(props) => props.theme.backgroundTertiary};

  & > span {
    padding: 0.5rem;

    border-radius: 0.5rem;

    background-color: ${(props) => props.theme.backgroundSecondary};
    box-shadow: 2px 2px 5px 0 ${(props) => props.theme.backgroundTertiary};

    cursor: pointer;

    transition: 0.8s;

    :hover {
      transform: scale(1.1) rotate(15deg);

      transition: 0.8s;
    }
  }
`;
