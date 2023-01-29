import styled, { css } from "styled-components";
import { ISTextAreaProps } from "./types";

export const Container = styled.div<ISTextAreaProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "2.5rem"};

  text-align: left;

  background-color: ${(props) => props.bgColor};

  & > div {
    margin-bottom: 0.2rem;
    padding-left: 1rem;

    color: ${(props) => props.color || props.theme.textPrimary};

    font-weight: bold;

    & > span {
      font-size: 10pt;
      color: var(--grey-purple);
    }
  }
`;

export const InputContainer = styled.div<ISTextAreaProps>`
  width: 100%;
  height: 90%;

  display: flex;

  padding: 0.5rem;

  border: 1.5px solid ${(props) => props.borderColor || props.theme.textPrimary};
  border-radius: ${(props) => props.borderRadius || "0.8rem"};

  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${(props) => props.theme.error};
    `}

  & > textarea {
    width: 80%;

    flex: 1;
    align-items: center;

    background: transparent;
    color: ${(props) => props.color || props.theme.textPrimary};

    ::placeholder {
      color: ${(props) => props.theme.transparentGray};
    }
  }
`;
