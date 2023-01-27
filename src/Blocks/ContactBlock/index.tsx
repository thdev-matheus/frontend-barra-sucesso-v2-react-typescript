import { useDarkMode } from "../../Contexts";
import * as S from "./styles";

export const ContactBlock = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <S.Container
      id="contact"
      bgImg={
        isDarkMode
          ? "https://i.ibb.co/Tc0mqb0/backdrop-dark.png"
          : "https://i.ibb.co/PZtCJwy/backdrop-light.png"
      }
    >
      <S.BoxLeft>
        <img
          src={
            isDarkMode
              ? "https://i.ibb.co/v4kCybm/arrow-down-dark.png"
              : "https://i.ibb.co/ryxV5kH/arrow-down-ligth.png"
          }
          alt=""
        />
      </S.BoxLeft>

      <S.BoxRigth>
        <p>
          Você pode entrar em contato comigo através das redes sociais, ou então
          só me procurar lá no Slack.
        </p>
      </S.BoxRigth>
    </S.Container>
  );
};
