import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
    width: 100vw;
    height: 200rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    padding: 1rem 0 4rem;

    scroll-margin-top: 5rem;
  }

  @media (min-width: 767px) {
    height: 70rem;
  }

  @media (min-width: 1024px) {
    height: 95rem;
  }

  @media (min-width: 1440px) {
    height: 111rem;
  }
`;

export const BoxTitle = styled.div`
  @media (min-width: 320px) {
    width: 90%;
    margin: 1rem 0;

    & > h1 {
      font-size: 18pt;
      font-weight: bold;

      text-align: center;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 767px) {
    & > h1 {
      font-size: 25pt;
    }
  }

  @media (min-width: 1440px) {
    & > h1 {
      font-size: 35pt;
    }
  }
`;

export const BoxParagraph = styled.div`
  @media (min-width: 320px) {
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & > p {
      font-size: 10pt;
      font-weight: bold;

      text-align: center;

      color: ${(props) => props.theme.textPrimary};
    }
  }

  @media (min-width: 767px) {
    & > p {
      font-size: 12pt;
    }
  }

  @media (min-width: 1440px) {
    width: 70%;

    & > p {
      font-size: 14pt;

      line-height: 1.5rem;
    }
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
  }
`;
