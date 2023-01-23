import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem 2rem;

    background-color: ${(props) => props.theme.transparentBlack};

    & > p {
      display: flex;
      gap: 0.3rem;
      font-size: 12pt;
      font-weight: bold;

      color: ${(props) => props.theme.white};

      cursor: default;

      & > div {
        transition: 0.5s;

        :hover {
          transform: scale(1.5) rotate(30deg);

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
