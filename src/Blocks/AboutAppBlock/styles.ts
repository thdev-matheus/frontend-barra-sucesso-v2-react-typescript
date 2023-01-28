import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
    width: 100vw;
    min-height: 25rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    scroll-margin-top: 5rem;

    background-color: ${(props) => props.theme.backgroundPrimary};
  }

  @media (min-width: 767px) {
    min-height: 21.8rem;
  }

  @media (min-width: 1024px) {
    min-height: 18.7rem;
  }
`;

export const BoxTitle = styled.div`
  @media (min-width: 320px) {
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    text-align: center;

    & > span {
      font-size: 9pt;
      font-weight: bold;

      color: ${(props) => props.theme.primary};
    }

    & > h2 {
      font-size: 16pt;
      font-weight: bold;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 767px) {
    width: 80%;

    & > span {
      font-size: 11pt;
    }

    & > h2 {
      font-size: 20pt;
    }
  }

  @media (min-width: 1024px) {
    & > span {
      font-size: 11pt;
    }
  }

  @media (min-width: 1440px) {
    & > span {
      font-size: 12pt;
    }

    & > h2 {
      font-size: 25pt;
    }
  }
`;

export const BoxBody = styled.div`
  @media (min-width: 320px) {
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & > div {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      text-align: center;

      & > p {
        width: 90%;

        font-size: 10pt;

        color: ${(props) => props.theme.textPrimary};
      }
    }
  }

  @media (min-width: 767px) {
    width: 80%;

    & > div {
      & > p {
        font-size: 12pt;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 80%;

    & > div {
      & > p {
        width: 80%;

        font-size: 11pt;
      }
    }
  }

  @media (min-width: 1440px) {
    & > div {
      & > p {
        font-size: 12pt;
      }
    }
  }
`;

export const BoxButton = styled.div`
  @media (min-width: 320px) {
    width: 100%;

    display: flex;
    justify-content: center;

    & > div {
      width: 10rem;
      height: 3rem;
    }
  }
`;
