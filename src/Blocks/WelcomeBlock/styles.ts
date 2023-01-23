import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100vw;
    min-height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    background-image: url(https://i.ibb.co/6yWQCGW/welcome-block-desktop.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxTitle = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 35%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    text-align: center;

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

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxBody = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 35%;

    text-align: center;

    & > p {
      font-size: 12pt;

      color: ${(props) => props.theme.textPrimary};
    }
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
    width: 10rem;
    height: 3rem;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
