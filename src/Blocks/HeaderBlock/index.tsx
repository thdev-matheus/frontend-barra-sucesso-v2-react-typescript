/* eslint-disable no-template-curly-in-string */
import { useDarkMode } from "../../Contexts/DarkMode";
import { FaWpforms } from "react-icons/fa";

import * as S from "./styles";
import * as C from "../../Components";

export const HeaderBlock = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <S.Container>
        <S.BoxLogo>
          <img
            src={
              isDarkMode
                ? "https://i.ibb.co/pn8yYyt/logo-dark.png"
                : "https://i.ibb.co/SBsZ30n/logo-light.png"
            }
            alt="logo"
          />
        </S.BoxLogo>

        <S.BoxMenuDesktop>
          <li>Home</li>
          <li>Sobre Mim</li>
          <li>Contato</li>
          <li>Sobre o App</li>
        </S.BoxMenuDesktop>

        <S.BoxButton>
          <C.Button
            label="/Pergunta"
            onAction={() => {}}
            icon={FaWpforms}
            width="7.5rem"
            height="2.5rem"
            iconAfter={true}
            iconSize="1rem"
            fontSize="11pt"
            radius="1.5rem"
          />
        </S.BoxButton>

        <S.BoxTheme>
          <C.DarkModeToggle color={isDarkMode ? "#f1c40f" : "#ecf0f1"} />
        </S.BoxTheme>
      </S.Container>
      <C.Separator height="5rem" />
    </>
  );
};
