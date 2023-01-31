import styled from "styled-components";

export const Container = styled.form`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100vw;
    height: calc(100vh - 5rem);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;

    padding: 1rem;

    overflow: hidden auto;

    background-color: ${(props) => props.theme.backgroundPrimamry};

    & > p {
      width: 60%;

      font-size: 14pt;
      font-weight: bold;

      text-align: center;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxInput = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 60%;

    & > .editor {
      min-height: 15.6rem;

      border: 1px solid black;
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxControls = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 60%;

    display: flex;
    justify-content: space-between;

    padding: 0 2rem;
    margin-top: 1rem;

    & > h4 {
      font-size: 16pt;
      font-weight: bold;

      color: ${(props) => props.theme.textPrimary};

      cursor: pointer;

      transition: 0.8s;

      :hover {
        transform: scale(1.1);

        color: ${(props) => props.theme.primary};

        transition: 0.8s;
      }
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxSelect = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100%;

    display: flex;
    justify-content: center;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxButton = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 60%;
    height: 3rem;

    & > button {
      border-radius: 0.5rem;
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
