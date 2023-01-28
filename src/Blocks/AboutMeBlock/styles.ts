import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
    width: 100vw;
    min-height: 30rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    scroll-margin-top: 5rem;

    background-color: ${(props) => props.theme.backgroundSecondary};
  }

  @media (min-width: 767px) {
    width: 100vw;
    min-height: 28rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    scroll-margin-top: 5rem;

    background-color: ${(props) => props.theme.backgroundSecondary};
  }

  @media (min-width: 1024px) {
    min-height: 32rem;
  }
`;

export const BoxLeft = styled.div`
  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 40%;
    height: 100%;

    & > div {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      & > img {
        height: 105%;

        position: relative;
        bottom: -2px;

        transition: 0.8s;

        :hover {
          transform: scale(1.1);
          transform-origin: bottom;

          transition: 1.5s;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    & > div {
      justify-content: center;

      & > img {
        height: 110%;
      }
    }
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxRight = styled.div`
  @media (min-width: 320px) {
    width: 80%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;

    & > section {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      gap: 1rem;

      padding-right: 1rem;
    }
  }

  @media (min-width: 767px) {
    width: 80%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;

    & > section {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      gap: 1rem;

      padding-right: 1rem;
    }
  }

  @media (min-width: 1024px) {
    width: 40%;

    gap: 1rem;
  }

  @media (min-width: 1440px) {
    & > section {
      align-items: center;
    }
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxTitle = styled.div`
  @media (min-width: 320px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    text-align: center;

    & > span {
      font-size: 9pt;
      font-weight: bold;

      color: ${(props) => props.theme.secondary};
    }

    & > h2 {
      font-size: 14pt;
      font-weight: bold;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 767px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    text-align: center;

    & > span {
      font-size: 11pt;
      font-weight: bold;

      color: ${(props) => props.theme.secondary};
    }

    & > h2 {
      font-size: 18pt;
      font-weight: bold;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 1024px) {
    width: 90%;
  }

  @media (min-width: 1440px) {
    & > span {
      font-size: 14pt;
    }

    & > h2 {
      font-size: 30pt;
    }
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxBody = styled.div`
  @media (min-width: 320px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    text-align: center;

    & > p {
      font-size: 8pt;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 767px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    text-align: center;

    & > p {
      font-size: 12pt;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 1024px) {
    width: 90%;
  }

  @media (min-width: 1900px) {
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

  @media (min-width: 767px) {
    width: 100%;

    display: flex;
    justify-content: center;

    & > div {
      width: 10rem;
      height: 3rem;
    }
  }

  @media (min-width: 1024px) {
    width: 90%;
  }

  @media (min-width: 1440px) {
    width: 100%;
  }

  @media (min-width: 1900px) {
  }
`;
