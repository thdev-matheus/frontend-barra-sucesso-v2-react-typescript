import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 270px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & > h2 {
    width: 90%;
    margin-top: 1rem;

    font-size: 14pt;
    font-weight: bold;
    text-align: center;

    color: ${(props) => props.theme.textPrimary};
  }
`;

export const BoxImg = styled.div`
  width: 200px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  border-radius: 70% 35% 50%;

  box-shadow: 2px 2px 5px 0 ${(props) => props.theme.transparentblack};

  transition: 0.5s;

  & > img {
    height: 100%;
  }

  :hover {
    transform: scale(1.3) rotate(5deg);

    border-radius: 50% 35% 60% 40%;

    transition: 2s;
  }
`;

export const BoxSocial = styled.div`
  width: 100%;
  height: 0;

  display: flex;
  justify-content: flex-end;

  & > a > div {
    width: 65px;
    height: 65px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    bottom: 50px;

    padding: 0.5rem;
    border-radius: 50%;

    box-shadow: 2px 2px 5px 0 ${(props) => props.theme.transparentgGray};

    background-color: #0a66c2;

    cursor: pointer;

    transition: 0.5s;

    & > svg {
      width: 40px;
      height: 40px;

      color: ${(props) => props.theme.white};
    }

    :hover {
      transform: scale(1.1) rotate(20deg);

      background-color: ${(props) => props.theme.primary};

      transition: 2s;
    }
  }
`;
