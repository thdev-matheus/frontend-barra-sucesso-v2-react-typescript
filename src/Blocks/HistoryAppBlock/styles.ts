import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100vw;
    height: 60rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    padding: 1rem 0 4rem;

    scroll-margin-top: 5rem;
  }

  @media (min-width: 1440px) {
    width: 100vw;
    height: 70rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    padding: 1rem 0 4rem;

    scroll-margin-top: 5rem;
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
    margin: 1rem 0;

    & > h1 {
      font-size: 25pt;
      font-weight: bold;

      text-align: center;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 1440px) {
    & > h1 {
      font-size: 35pt;
      font-weight: bold;

      text-align: center;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxParagraph = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & > p {
      font-size: 12pt;
      font-weight: bold;

      text-align: center;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 1440px) {
    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & > p {
      font-size: 14pt;
      font-weight: bold;

      line-height: 1.5rem;

      text-align: center;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxButton = styled.div`
  @media (min-width: 320px) {
    width: 10rem;
    min-height: 3rem;

    display: flex;
    justify-content: center;

    margin: 1rem 0;
  }

  @media (min-width: 1440px) {
    width: 15rem;
    min-height: 4rem;

    display: flex;
    justify-content: center;

    margin: 1rem 0;
  }
`;
