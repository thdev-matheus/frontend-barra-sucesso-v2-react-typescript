import { useDarkMode } from "../../Contexts/DarkMode";
import * as S from "./styles";

export const HeaderBlock = () => {
  const { isDarkMode } = useDarkMode();
  return (
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

      <S.BoxMenuDesktop></S.BoxMenuDesktop>

      <S.BoxButton></S.BoxButton>

      <S.BoxTheme></S.BoxTheme>
    </S.Container>
  );
};
