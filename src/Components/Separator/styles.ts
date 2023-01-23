import styled from "styled-components";
import * as T from "./types";

export const Container = styled.section<T.IContainerProps>`
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};

  position: relative;
  top: 0;

  background-color: ${(props) =>
    props.bgColor || props.theme.backgroundPrimary};
`;
