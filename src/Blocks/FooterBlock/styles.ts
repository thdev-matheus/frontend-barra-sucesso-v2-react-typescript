import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 100vw;
    min-height: 200px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0 10%;

    background-color: ${(props) => props.theme.backgroundTertiary};
  }

  @media (min-width: 1440px) {
    min-height: 270px;
  }
`;

export const BoxSocial = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 30%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    border-right: 1px solid ${(props) => props.theme.textTertiary};

    & > h2 {
      width: 9rem;

      line-height: 2.1rem;

      font-size: 18pt;

      color: ${(props) => props.theme.tertiary};
    }
  }

  @media (min-width: 1024px) {
    gap: 1.5rem;

    & > h2 {
      width: 11rem;

      font-size: 25pt;
    }
  }

  @media (min-width: 1440px) {
    & > h2 {
      width: 20rem;

      line-height: 3.5rem;

      font-size: 35pt;
    }
  }
`;

export const BoxIcons = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    & > a > svg {
      width: 30px;
      height: 30px;

      cursor: pointer;

      transition: 0.3s;

      :hover {
        transform: scale(1.2) rotate(15deg);

        transition: 1.5s;
      }
    }
  }

  @media (min-width: 1024px) {
    & > a > svg {
      width: 35px;
      height: 35px;
    }
  }

  @media (min-width: 1440px) {
    & > a > svg {
      width: 45px;
      height: 45px;
    }
  }
`;

export const BoxLinks = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 30%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    padding-left: 1rem;

    border-right: 1px solid ${(props) => props.theme.textTertiary};

    & > h2 {
      font-size: 16pt;
      font-weight: bold;

      color: ${(props) => props.theme.primary};
    }
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;

    & > h2 {
      font-size: 20pt;
    }
  }

  @media (min-width: 1440px) {
    & > h2 {
      font-size: 28pt;
    }
  }
`;

export const Links = styled.ul`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;

    padding-left: 1rem;

    & > li {
      list-style: none;

      font-size: 10pt;
      font-weight: bold;

      color: ${(props) => props.theme.textTertiary};

      cursor: pointer;

      transition: 0.5s;

      & > a {
        text-decoration: none;

        color: ${(props) => props.theme.textTertiary};
      }

      :hover {
        transform: scale(0.9);

        color: ${(props) => props.theme.tertiary};

        transition: 1s;
      }
    }
  }

  @media (min-width: 1024px) {
    & > li {
      font-size: 12pt;
    }
  }

  @media (min-width: 1440px) {
    gap: 0.8rem;

    & > li {
      font-size: 16pt;
    }
  }
`;

export const BoxButton = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
    width: 10%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    & > a > div {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;
      top: -25px;

      border-radius: 50%;

      box-shadow: 0 0 5px 0 #353535;

      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.secondary};

      cursor: pointer;

      transition: 0.5s;

      & > svg {
        width: 2.3rem;
        height: 2.3rem;
      }

      :hover {
        transform: scale(1.2) rotate(360deg);

        box-shadow: 0 0 8px 0 #353535;

        transition: 0.5s;
      }
    }
  }

  @media (min-width: 1024px) {
    & > a > div {
      width: 4rem;
      height: 4rem;

      top: -35px;

      & > svg {
        width: 2.7rem;
        height: 2.7rem;
      }
    }
  }

  @media (min-width: 1440px) {
    & > a > div {
      width: 5rem;
      height: 5rem;

      & > svg {
        width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
`;
