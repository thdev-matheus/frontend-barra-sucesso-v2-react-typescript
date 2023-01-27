/* eslint-disable no-template-curly-in-string */
import * as S from "./styles";
import * as C from "../../Components";

import { useDarkMode } from "../../Contexts";

import { FiArrowRightCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const WelcomeBlock = () => {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const goTo = (path: string) => navigate(path);

  return (
    <>
      <C.Separator height="5rem" bgColor="transparent" zIndex={10} />
      <S.Container id="home">
        <S.BoxTitle>
          <motion.div
            transition={{
              duration: 0.8,
              delay: 1.4,
              type: "spring",
              stiffness: 80,
            }}
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <h2>Bem vindo(a) ao /Sucesso!</h2>
          </motion.div>
          <motion.div
            transition={{
              duration: 0.8,
              delay: 1.1,
              type: "spring",
              stiffness: 80,
            }}
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <span>O lugar onde você estrutura o seu /pergunta.</span>
          </motion.div>
        </S.BoxTitle>

        <S.BoxBody>
          <motion.div
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              stiffness: 80,
            }}
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <p>
              Este é o lugar para você que tem dificuldades em elaborar o seu
              /perguntas.
            </p>
            <p>
              É importante você saber que o monitor/instrutor precisa entender
              qual exatamente é o desafio que você está a enfrentar para que
              possa se preparar adequadamente para te atender. Então preencha
              todos os campos com atenção e de uma forma bem detalhada, pois
              assim, conseguiremos estruturar o seu /pergunta de uma forma que o
              monitor/instrutor vai ler e entender bem em que ponto precisará
              intervir em sua dúvida.
            </p>
            <p>
              Já aconteceu muitas vezes de, ao estruturar um /pergunta, o Dev
              encontrar a resposta para a sua dúvida e dessa forma nem chegar a
              precisar do atendimento.
            </p>
            <p>
              Seja completamente sinceroa(a) e não tenha medo ou vergonha de
              informar qual a sua real dificuldade.
            </p>
          </motion.div>
        </S.BoxBody>

        <S.BoxButton>
          <motion.div
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 80,
            }}
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <C.Button
              label="Saiba mais"
              onAction={() => goTo("/about-app")}
              icon={FiArrowRightCircle}
              iconAfter={true}
              hColor={isDarkMode ? undefined : "#ecf0f1"}
              hBgColor={isDarkMode ? undefined : "#2c3e50"}
              radius="2rem"
            />
          </motion.div>
        </S.BoxButton>
      </S.Container>
    </>
  );
};
