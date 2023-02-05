import { useDarkMode } from "../../Contexts";
import quack from "../../Assets/Sounds/quack.mp3";

import * as S from "./styles";

export const CreditBlock = () => {
  const { isDarkMode } = useDarkMode();

  const soundQuack = new Audio(quack);

  return (
    <S.Container isDarkMode={isDarkMode}>
      <p>
        Desenvolvido por Matheus (Theus) Vieira -{" "}
        <div onClick={() => soundQuack.play()}>🦆</div>
      </p>
    </S.Container>
  );
};
