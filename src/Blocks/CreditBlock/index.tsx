import { useDarkMode } from "../../Contexts";

import * as S from "./styles";

export const CreditBlock = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <S.Container isDarkMode={isDarkMode}>
      <p>
        Desenvolvido por Matheus (Theus) Vieira - <div>🦆</div>
      </p>
    </S.Container>
  );
};
