import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 80vw;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    padding: 1rem 0 3rem;

    scroll-margin-top: 5rem;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxContact = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 80%;
    height: 10rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & > h2 {
      font-size: 25pt;
      text-align: center;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxSocial = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & > a > svg {
      width: 45px;
      height: 45px;

      cursor: pointer;

      transition: 0.3s;

      :hover {
        transform: scale(1.2) rotate(15deg);

        transition: 1.5s;
      }
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxMail = styled.form`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 80%;
    height: 20rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxSend = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 0;

    display: flex;
    justify-content: flex-end;

    & > svg {
      width: 50px;
      height: 50px;

      position: relative;
      bottom: 90px;
      right: 30px;

      color: ${(props) => props.theme.tertiary};

      cursor: pointer;

      transition: 0.5s;

      animation-name: shake;
      animation-duration: 3s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;

      :hover {
        animation-play-state: paused;

        transition: 1.5s;

        color: ${(props) => props.theme.primary};
      }
    }

    @keyframes shake {
      15% {
        transform: rotate(-15deg);
      }

      17% {
        transform: rotate(15deg);
      }

      19% {
        transform: rotate(-15deg);
      }

      21% {
        transform: rotate(15deg);
      }

      23% {
        transform: rotate(-15deg);
      }

      25% {
        transform: rotate(15deg);
      }

      27% {
        transform: rotate(-15deg);
      }

      29% {
        transform: rotate(15deg);
      }

      31% {
        transform: rotate(-15deg);
      }

      33% {
        transform: rotate(0);
      }

      to {
        transform: rotate(0);
      }
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
