/* eslint-disable no-template-curly-in-string */
import * as S from "./styles";
import * as C from "../../Components";
import { FiArrowRightCircle } from "react-icons/fi";
import { useDarkMode } from "../../Contexts";

export const WelcomeBlock = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <S.Container>
      <S.BoxTitle>
        <h2>Bem vindo(a) ao /Sucesso!</h2>
        <span>O lugar onde você estrutura o seu /pergunta.</span>
      </S.BoxTitle>
      <S.BoxBody>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptates in neque. Quas, voluptatum? Asperiores voluptates
          necessitatibus aperiam inventore magnam ut consequuntur. Id labore
          cupiditate dolor maxime nesciunt incidunt consequatur?
        </p>
      </S.BoxBody>

      <S.BoxButton>
        <C.Button
          label="Saiba mais"
          onAction={() => {}}
          width=""
          height=""
          icon={FiArrowRightCircle}
          iconAfter={true}
          iconSize=""
          fontSize=""
          color=""
          bgColor=""
          hColor=""
          hBgColor={isDarkMode ? undefined : "#2c3e50"}
          radius="2rem"
        />
      </S.BoxButton>
    </S.Container>
  );
};
