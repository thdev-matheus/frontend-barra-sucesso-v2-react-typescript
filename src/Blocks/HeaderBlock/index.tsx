/* eslint-disable no-template-curly-in-string */
import { useDarkMode } from "../../Contexts/DarkMode";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { FaWpforms } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";

import * as S from "./styles";
import * as C from "../../Components";
import { useMediaQuery } from "../../Contexts";

export const HeaderBlock = () => {
  const { isDarkMode } = useDarkMode();
  const { widthScreen } = useMediaQuery();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const goTo = (path: string) => navigate(path);

  return (
    <>
      {isOpen && (
        <C.Drawer actionClose={toggleIsOpen}>
          <S.MenuMobile>
            <li
              onClick={() => {
                toggleIsOpen();
                goTo("/");
              }}
            >
              <a href="#home">Home</a>
            </li>
            <li
              onClick={() => {
                toggleIsOpen();
                goTo("/");
              }}
            >
              <a href="#aboutMe">Sobre Mim</a>
            </li>
            <li
              onClick={() => {
                toggleIsOpen();
                goTo("/");
              }}
            >
              <a href="#aboutApp">Sobre o App</a>
            </li>
            <li
              onClick={() => {
                toggleIsOpen();
                goTo("/");
              }}
            >
              <a href="#contact">Contato</a>
            </li>
          </S.MenuMobile>
          <S.BoxButtonMobile>
            <C.Button
              label="/Pergunta"
              onAction={() => goTo("/form")}
              icon={widthScreen >= 767 ? FaWpforms : undefined}
              width={widthScreen >= 767 ? "7.5rem" : "5.5rem"}
              height={widthScreen >= 767 ? "2.5rem" : "2rem"}
              iconAfter={true}
              iconSize="1rem"
              fontSize={widthScreen >= 767 ? "11pt" : "9pt"}
              radius={widthScreen >= 767 ? "1.5rem" : ".5rem"}
            />
          </S.BoxButtonMobile>
        </C.Drawer>
      )}
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
          <li onClick={() => goTo("/")}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => goTo("/")}>
            <a href="#aboutMe">Sobre Mim</a>
          </li>
          <li onClick={() => goTo("/")}>
            <a href="#aboutApp">Sobre o App</a>
          </li>
          <li onClick={() => goTo("/")}>
            <a href="#contact">Contato</a>
          </li>
        </S.BoxMenuDesktop>

        <S.BoxButton>
          <C.Button
            label="/Pergunta"
            onAction={() => goTo("/form")}
            icon={widthScreen >= 767 ? FaWpforms : undefined}
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

        <S.BoxMenuMobile>
          <CgMenuRight onClick={toggleIsOpen} />
        </S.BoxMenuMobile>
      </S.Container>
    </>
  );
};
