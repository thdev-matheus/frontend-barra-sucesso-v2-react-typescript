import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 100vw;
    min-height: 600px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    scroll-margin-top: 5rem;

    background-image: url(https://i.ibb.co/WcbRQcP/welcome-block-mobile.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 1024px) {
    width: 100vw;
    min-height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    scroll-margin-top: 5rem;

    background-image: url(https://i.ibb.co/6yWQCGW/welcome-block-desktop.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 1440px) {
    gap: 1.5rem;
  }
`;

export const BoxTitle = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 40%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    text-align: center;

    & > div {
      & > h2 {
        font-size: 18pt;
        font-weight: bold;

        color: ${(props) => props.theme.textPrimary};
      }

      & > span {
        font-size: 9pt;
        font-weight: bold;

        text-transform: uppercase;

        color: ${(props) => props.theme.primary};
      }
    }
  }

  @media (min-width: 1024px) {
    width: 35%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    text-align: center;

    & > div {
      & > h2 {
        font-size: 20pt;
        font-weight: bold;

        color: ${(props) => props.theme.textPrimary};
      }

      & > span {
        font-size: 10pt;
        font-weight: bold;

        text-transform: uppercase;

        color: ${(props) => props.theme.primary};
      }
    }
  }

  @media (min-width: 1440px) {
    width: 40%;

    & > div {
      & > h2 {
        font-size: 30pt;
      }

      & > span {
        font-size: 14pt;
      }
    }
  }
`;

export const BoxBody = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 50%;

    text-align: center;

    & > div {
      & > p {
        margin-bottom: 0.5rem;

        font-size: 12pt;

        color: ${(props) => props.theme.textPrimary};
      }
    }
  }

  @media (min-width: 1024px) {
    width: 35%;

    text-align: center;

    & > div {
      & > p {
        margin-bottom: 0.5rem;

        font-size: 10pt;

        color: ${(props) => props.theme.textPrimary};
      }
    }
  }

  @media (min-width: 1440px) {
    width: 40%;

    & > div {
      & > p {
        font-size: 12pt;
      }
    }
  }
`;

export const BoxButton = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 10rem;
    height: 3rem;

    & > div {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 1024px) {
    width: 10rem;
    height: 3rem;

    & > div {
      width: 100%;
      height: 100%;
    }
  }
`;
