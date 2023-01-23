import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 10%;

    background-color: ${(props) => props.theme.black};
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxLogo = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: calc(3 * (100% / 10));
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid red;

    & > img {
      width: auto;
      height: 80%;

      cursor: pointer;

      transition: 0.3s;

      :hover {
        transform: scale(1.1);

        transition: 1.5s;
      }
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxMenuDesktop = styled.ul`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: calc(5 * (100% / 10));
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;

    padding-left: 1rem;

    border: 1px solid magenta;

    & > li {
      list-style: none;

      font-size: 12pt;
      font-weight: bold;

      color: ${(props) => props.theme.white};

      cursor: pointer;

      transition: 0.5s;

      :hover {
        transform: scale(0.9);

        color: ${(props) => props.theme.tertiary};

        transition: 0.5s;
      }
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
    width: calc(2 * (100% / 10));
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid cyan;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxTheme = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: calc(1 * (100% / 10));
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid yellow;
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
