import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    padding: 1rem;

    scroll-margin-top: 5rem;
  }

  @media (min-width: 767px) {
    padding: 2rem;
  }
`;

export const BoxTitle = styled.div`
  @media (min-width: 320px) {
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    text-align: center;

    & > h1 {
      font-size: 25pt;
      font-weight: bold;

      color: ${(props) => props.theme.textPrimary};
    }

    & > p {
      font-size: 10pt;
      line-height: 1rem;

      color: ${(props) => props.theme.textPrimary};
    }

    & > span {
      font-size: 8pt;

      line-height: 1rem;

      color: ${(props) => props.theme.error};
    }
  }

  @media (min-width: 767px) {
    width: 80%;

    & > h1 {
      font-size: 30pt;
    }

    & > p {
      font-size: 12pt;
      line-height: 1.2rem;
    }

    & > span {
      font-size: 10pt;
    }
  }

  @media (min-width: 1900px) {
    width: 60%;

    gap: 1.5rem;

    margin-bottom: 3rem;

    & > h1 {
      font-size: 40pt;
    }

    & > p {
      font-size: 18pt;
      line-height: 2rem;
    }

    & > span {
      font-size: 16pt;
    }
  }
`;

export const BoxCards = styled.div`
  @media (min-width: 320px) {
    width: 90%;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem 4rem;
  }

  @media (min-width: 767px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;

    gap: 2rem;
  }

  @media (min-width: 1900px) {
    gap: 3rem;
  }
`;
