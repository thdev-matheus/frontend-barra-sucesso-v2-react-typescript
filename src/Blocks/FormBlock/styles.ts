import styled from "styled-components";

export const Container = styled.form`
  @media (min-width: 320px) {
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
      width: 80%;

      font-size: 12pt;
      font-weight: bold;

      text-align: center;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 767px) {
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
    width: 90%;

    margin-top: 1rem;

    & > .editor {
      min-height: 14rem;

      border-radius: 0.8rem;

      font-weight: bold;

      box-shadow: 2px 2px 5px 0 ${(props) => props.theme.gray};

      background-color: ${(props) => props.theme.backgroundTertiary};
      color: ${(props) => props.theme.white};
    }
  }

  @media (min-width: 767px) {
    width: 60%;

    & > .editor {
      min-height: 14rem;

      border-radius: 0.8rem;

      font-weight: bold;

      box-shadow: 2px 2px 5px 0 ${(props) => props.theme.gray};

      background-color: ${(props) => props.theme.backgroundTertiary};
      color: ${(props) => props.theme.white};
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxControls = styled.div`
  @media (min-width: 320px) {
    width: 90%;

    display: flex;
    justify-content: space-between;

    padding: 0 1rem;
    margin-top: 0.5rem;

    & > h4 {
      font-size: 12pt;
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

  @media (min-width: 767px) {
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
    width: 80%;

    display: flex;
    justify-content: center;
  }

  @media (min-width: 767px) {
    width: 50%;

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
    width: 60%;
    min-height: 3rem;

    & > button {
      border-radius: 0.5rem;
    }
  }

  @media (min-width: 767px) {
    width: 60%;
    min-height: 3rem;

    & > button {
      border-radius: 0.5rem;
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
