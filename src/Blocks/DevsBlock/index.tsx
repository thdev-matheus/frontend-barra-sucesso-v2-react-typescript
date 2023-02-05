import * as S from "./styles";
import * as C from "../../Components";

import { myDevs } from "../../Data/devs";

export const DevsBlock = () => {
  return (
    <S.Container>
      <S.BoxTitle>
        <h1>Hall de Devs</h1>
        <p>
          Aqui você confere todos os devs que eu tive a honra de acompanhar como
          monitor. Cada um com sua personalidade e características que qualquer
          squad seria muito feliz em ter. Para mim são pessoas por demais
          especiais que passaram pela minha vida e deixaram uma marca que, como
          desenvolvedor e pessoa, farei questão de lembrar.
        </p>
        <span>
          Este hall não está completo ainda pois estou colhendo as autorizações
          dos devs e a medida que me forem autorizando, estarei pondo os demais
          nomes aqui.
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
