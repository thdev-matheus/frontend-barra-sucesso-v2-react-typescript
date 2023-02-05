import * as S from "./styles";
import * as C from "../../Components";
import { useMediaQuery } from "../../Contexts";

export const HistoryAppBlock = () => {
  const { widthScreen } = useMediaQuery();

  return (
    <S.Container id="homeAboutApp">
      <S.BoxTitle>
        <h1>Mas Como Assim /Sucesso?</h1>
      </S.BoxTitle>
      <S.BoxParagraph>
        <p>
          Na entrevista de admissão para a academia, me foi explicado a posição
          dos monitores(na época eram chamados de coachs) e foi algo que gerou
          encanto pois eu já tinha sido monitor do curso de artes gráficas pela
          SAGA de Recife/PE e era professor Designer Gráfico então desde sempre
          eu gosto de ensinar.
        </p>
        <p>
          Logo quando finalizei o 1º módulo, fui convidado a fazer parte do
          squad de monitores de um dos facilitadores do M1, e foi aí onde tudo
          começou.
        </p>
        <p>
          Fomos apresentados ao quackers que é o canal onde recebemos os
          /perguntas dos devs do módulo e muitas perguntas eram do tipo: "Dúvida
          de HTML" ou "Me ajuda pfv."
        </p>
        <p>
          Sempre houve um esforço de todo o time de ensino para conscientizar os
          devs novos e antigos para formular boas perguntas com o máximo de
          detalhes possível. Então eu pensei que se houvesse alguma forma de se
          ter um passo a passo onde o dev fosse formulando o a sua dúvida e no
          final ele só precisasse copiar para o slack seria de grande ajuda pra
          o time de ensino, mas eu ainda não dispunha de conhecimento básico
          para fazer o mínimo, por isso deixei a idéia guardada.
        </p>
        <p>
          Foi quando estava na metade do 3º módulo (módulo de React.JS), sendo
          monitor do M2, com devs mandando o mesmo tipo de dúvida que não
          explica muita coisa, que eu juntei o conhecimento necessário para
          começar o projeto. E assim foi criada a versão 1.0.0 do app /sucesso
          que você pode conferir clicando no botão abaixo. Mas já vão me
          perdoando pois a aplicação não segue regras e basicamente é o ósseo da
          solução pra um problema e nada mais do que isso.
        </p>
      </S.BoxParagraph>

      <S.BoxButton>
        <C.Button
          label="/Sucesso V1.0.0"
          onAction={() =>
            (window.location.href =
              "https://th-matheus-barra-sucesso.vercel.app/")
          }
          radius="2rem"
          fontSize={widthScreen >= 1440 ? "16pt" : undefined}
        />
      </S.BoxButton>

      <S.BoxParagraph>
        <p>
          Muita coisa aconteceu depois disso e eu deixei a aplicação parada por
          muito tempo. Mas muitas coisas como ter conhecido o ContextAPI,
          Typescript e algumas libs muito legais contribuíram para voltar e
          fazer essa versão do app que você pode ver aqui. Mas eu tinha muito o
          que estudar pois começara o M4 e o back end requer bastante atenção
          logo no início.
        </p>
        <p>
          Passou-se o M4, M5 e já no M6 eu estava prestes a me formar e queria
          deixar algo para a academia que mudou minha vida e me ajudou a
          realizar o sonho de ser programador. Então já com um conhecimento mais
          encorpado de TS, Context e Styled Components, etc, eu dei início a
          versão 2.0.0 do /sucesso e esse é o projeto que eu vou deixar para a
          academia como forma de agradecimento por todo o conhecimento
          dispensado a mim.
        </p>
        <p>
          Há muitas pessoas para agradecer e eu não quero deixar nenhuma de
          fora, por isso eu criei o hall de devs e instrutores que você pode
          acessar aqui no rodapé e conferir todas ou quase todas as pessoas que
          fizeram parte da minha trilha pela academia. Pessoas a quem eu serei
          eternamente grato.
        </p>
        <p>
          Hoje eu estou formado e trago uma nova sensação de esperança em mim,
          mas sem dúvida o que mais me preenche é a gratidão por ter estudado e
          ter feito parte do melhor squad de ensino que eu já vi.
        </p>
      </S.BoxParagraph>
    </S.Container>
  );
};
