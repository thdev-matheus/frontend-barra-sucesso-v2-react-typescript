import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & > img {
      width: 25rem;

      transition: 0.5s;

      :hover {
        transform: scale(1.2);

        transition: 1.5s;
      }
    }

    & > div {
      width: 40%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.5rem;

      text-align: left;

      color: ${(props) => props.theme.textPrimary};

      & > h2 {
        font-size: 25pt;
        font-weight: bold;
      }

      & > span {
        font-size: 16pt;
        font-weight: bold;

        margin-top: 1.5rem;

        cursor: pointer;

        transition: 0.8s;

        animation-name: pulse;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-play-state: paused;

        :hover {
          animation-play-state: running;
          color: ${(props) => props.theme.primary};
        }
      }
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }

  @keyframes pulse {
    50% {
      transform: scale(1.2);
    }

    to {
      transform: scale(1);
    }
  }
`;
