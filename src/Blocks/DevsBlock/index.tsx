import * as S from "./styles";
import * as C from "../../Components";

import { myDevs } from "../../Data/devs";

export const DevsBlock = () => {
  return (
    <S.Container>
      <S.BoxTitle>
        <h1>Hall de Devs</h1>
        <p>
          Aqqui você confere todos os devs que eu tive a honra de acompanhar
          como monitor. Cada um com sua personalidade e características que
          qualquer squad seria muito feliz em ter.
        </p>
        <span>
          A medida que me forem autorizando, estarei pondo os demais nomes dos
          devs que eu acompanhei.
        </span>
      </S.BoxTitle>

      <S.BoxCards>
        {myDevs.map((dev) => (
          <C.CardPerson person={dev} />
        ))}
      </S.BoxCards>
    </S.Container>
  );
};
