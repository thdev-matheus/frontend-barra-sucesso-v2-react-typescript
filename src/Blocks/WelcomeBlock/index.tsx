/* eslint-disable no-template-curly-in-string */
import * as S from "./styles";
import * as C from "../../Components";

import { useDarkMode } from "../../Contexts";

import { FiArrowRightCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export const WelcomeBlock = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <C.Separator
        identifier="welcome"
        height="5rem"
        bgColor="transparent"
        zIndex={10}
      />
      <S.Container>
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptates in neque. Quas, voluptatum? Asperiores voluptates
              necessitatibus aperiam inventore magnam ut consequuntur. Id labore
              cupiditate dolor maxime nesciunt incidunt consequatur?
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
              onAction={() => {}}
              icon={FiArrowRightCircle}
              iconAfter={true}
              hBgColor={isDarkMode ? undefined : "#2c3e50"}
              radius="2rem"
            />
          </motion.div>
        </S.BoxButton>
      </S.Container>
    </>
  );
};
