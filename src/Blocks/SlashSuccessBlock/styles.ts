import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    padding: 3rem 10%;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxDescriptions = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    text-align: center;

    margin-top: 2rem;

    & > h2 {
      margin-bottom: 1rem;

      font-size: 25pt;
      font-weight: bold;

      color: ${(props) => props.theme.textPrimary};
    }

    & > p {
      font-size: 12pt;
      font-weight: bold;

      color: ${(props) => props.theme.textPrimary};

      & > span {
        color: ${(props) => props.theme.secondary};

        cursor: pointer;

        transition: 0.5s;

        :hover {
          color: ${(props) => props.theme.tertiary};

          transition: 1.5s;
        }
      }
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxTextCopy = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > .editor {
      width: 100%;
      /* min-height: 14rem; */

      border-radius: 0.8rem;

      font-weight: bold;

      box-shadow: 2px 2px 5px 0 ${(props) => props.theme.gray};

      background-color: ${(props) => props.theme.backgroundTertiary};
      color: ${(props) => props.theme.white};
      transform: translateY(20px);
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxCopy = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 100%;
    height: 0;

    display: flex;
    justify-content: flex-end;

    & > svg {
      width: 35px;
      height: 35px;

      position: relative;
      right: 15px;
      bottom: -35px;
      z-index: 8999;

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
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }

  @keyframes shake {
    15% {
      transform: rotate(15deg);
    }

    17% {
      transform: rotate(-15deg);
    }

    19% {
      transform: rotate(15deg);
    }

    21% {
      transform: rotate(-15deg);
    }

    23% {
      transform: rotate(-15deg);
    }

    25% {
      transform: rotate(15deg);
    }

    27% {
      transform: rotate(15deg);
    }

    29% {
      transform: rotate(15deg);
    }

    31% {
      transform: rotate(15deg);
    }

    33% {
      transform: rotate(0);
    }

    to {
      transform: rotate(0);
    }
  }
`;
