import * as S from "./styles";
import * as C from "../../Components";

import { MyInstructors } from "../../Data/instructors";

export const InstructorsBlock = () => {
  return (
    <S.Container id="homeInstructors">
      <S.BoxTitle>
        <h1>Hall de Instrutores</h1>
        <p>
          Nesta seção você verá todos os instrutores que contribuíram para meu
          crescimento aqui na academia. Sem dúvida cada um deles tem um espaço
          especial em minha carreira e cada um, me ensinou, deu suporte,
          incentivou, vibrou, entristeceu-se nas minhas dificuldades e seus
          feedbacks fazem diferênça até hoje na minha forma de codar. Eu costumo
          dizer que eles não tem nem idéia do quanto mudam a vida das pessoas
          com o seu trabalho e por isso merecem um lugar de respeito e honra.
        </p>
        <span>
          Este hall não está completo ainda pois estou colhendo as autorizações
          dos instrutores e a medida que me forem autorizando, estarei pondo os
          demais nomes aqui.
        </span>
      </S.BoxTitle>

      <S.BoxCards>
        {MyInstructors.map((instructor) => (
          <C.CardPerson person={instructor} />
        ))}
      </S.BoxCards>
    </S.Container>
  );
};
