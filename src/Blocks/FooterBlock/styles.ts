import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100vw;
    min-height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 10%;

    background-color: ${(props) => props.theme.backgroundTertiary};
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
    width: 30%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    border-right: 1px solid ${(props) => props.theme.textTertiary};

    & > h2 {
      width: 11rem;

      line-height: 2.1rem;

      font-size: 25pt;

      color: ${(props) => props.theme.tertiary};
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxIcons = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    & > a > svg {
      width: 35px;
      height: 35px;

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

export const BoxLinks = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 30%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    padding-left: 2rem;

    border-right: 1px solid ${(props) => props.theme.textTertiary};

    & > h2 {
      font-size: 20pt;
      font-weight: bold;

      color: ${(props) => props.theme.primary};
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const Links = styled.ul`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;

    padding-left: 1rem;

    & > li {
      list-style: none;

      font-size: 12pt;
      font-weight: bold;

      color: ${(props) => props.theme.textTertiary};

      cursor: pointer;

      transition: 0.5s;

      :hover {
        transform: scale(0.9);

        color: ${(props) => props.theme.tertiary};

        transition: 1s;
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
    width: 10%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    & > a > div {
      width: 4rem;
      height: 4rem;

      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;
      top: -35px;

      border-radius: 50%;

      box-shadow: 0 0 5px 0 #353535;

      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.secondary};

      cursor: pointer;

      transition: 0.5s;

      & > svg {
        width: 2.7rem;
        height: 2.7rem;
      }

      :hover {
        transform: scale(1.2) rotate(360deg);

        box-shadow: 0 0 8px 0 #353535;

        transition: 0.5s;
      }
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
