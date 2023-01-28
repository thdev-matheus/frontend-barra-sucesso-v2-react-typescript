import styled from "styled-components";

export const Container = styled.header`
  @media (min-width: 320px) {
    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    z-index: 9000;

    padding: 0.5rem 10%;

    background-color: ${(props) => props.theme.transparentBlack};
  }
`;

export const BoxLogo = styled.div`
  @media (min-width: 320px) {
    width: calc(6 * (100% / 10));
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      width: 90%;
      height: auto;

      cursor: pointer;

      transition: 0.3s;

      :hover {
        transform: scale(1.1);

        transition: 1.5s;
      }
    }
  }

  @media (min-width: 767px) {
    width: calc(3 * (100% / 10));
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

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

  @media (min-width: 1024px) {
    width: calc(3 * (100% / 10));
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

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

  @media (min-width: 1900px) {
    width: calc(1.5 * (100% / 10));
  }
`;

export const BoxMenuDesktop = styled.ul`
  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 1024px) {
    width: calc(5 * (100% / 10));
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;

    padding-left: 1rem;

    & > li {
      list-style: none;

      font-size: 12pt;
      font-weight: bold;

      color: ${(props) => props.theme.white};

      cursor: pointer;

      transition: 0.5s;

      & > a {
        text-decoration: none;

        color: ${(props) => props.theme.white};
      }

      :hover {
        transform: scale(0.9);

        color: ${(props) => props.theme.tertiary};

        transition: 0.5s;
      }
    }
  }

  @media (min-width: 1900px) {
    width: calc(7.5 * (100% / 10));

    gap: 2rem;

    padding-left: 2rem;

    & > li {
      font-size: 16pt;
    }
  }
`;

export const BoxButton = styled.div`
  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 767px) {
    width: calc(5 * (100% / 10));
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    width: calc(2 * (100% / 10));
  }

  @media (min-width: 1900px) {
    width: calc(1 * (100% / 10));
  }
`;

export const BoxTheme = styled.div`
  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 1024px) {
    width: calc(1 * (100% / 10));
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BoxMenuMobile = styled.div`
  @media (min-width: 320px) {
    width: calc(4 * (100% / 10));
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > svg {
      width: 70%;
      height: 70%;

      color: ${(props) => props.theme.white};
    }
  }

  @media (min-width: 767px) {
    width: calc(2 * (100% / 10));
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
      width: 70%;
      height: 70%;

      color: ${(props) => props.theme.white};
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuMobile = styled.ul`
  @media (min-width: 320px) {
    width: 90%;
    height: 60%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    padding: 1rem 0;

    text-align: left;

    & > li {
      list-style: none;

      & > a {
        font-size: 12pt;
        font-weight: bold;
        text-decoration: none;

        color: ${(props) => props.theme.textPrimary};
      }
    }
  }

  @media (min-width: 767px) {
    height: 100%;

    padding: 3rem 1rem;

    & > li {
      & > a {
        font-size: 20pt;
      }
    }
  }
`;

export const BoxButtonMobile = styled.div`
  @media (min-width: 320px) {
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
