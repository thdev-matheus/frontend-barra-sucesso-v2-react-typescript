import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100vw;
    height: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow: hidden auto;

    background-color: ${(props) => props.theme.backgroundPrimary};
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
