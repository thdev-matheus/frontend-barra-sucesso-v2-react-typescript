import * as S from "./styles";
import * as C from "../../Components";
import { motion } from "framer-motion";
import { FiArrowRightCircle } from "react-icons/fi";
import { useDarkMode } from "../../Contexts";
import { useNavigate } from "react-router-dom";

export const AboutMeBlock = () => {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const goTo = (path: string) => navigate(path);

  return (
    <S.Container id="aboutMe">
      <S.BoxLeft>
        <motion.div
          transition={{
            duration: 1.2,
            delay: 1,
            type: "spring",
            stiffness: 80,
          }}
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <img src="https://i.ibb.co/hHkxmMZ/me.png" alt="me" />
        </motion.div>
      </S.BoxLeft>

      <S.BoxRight>
        <motion.section
          transition={{
            duration: 1.2,
            delay: 1,
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
          <S.BoxTitle>
            <span>UM POUCO SOBRE MIM</span>
            <h2>Um Apaixonado Por Métodos de Ensino</h2>
          </S.BoxTitle>

          <S.BoxBody>
            <p>
              Desde sempre eu busco aprender com o intúito de ensinar. Acho
              revigorante a idéia de que eu posso passar meus conhecimentos e
              ver outras pessoas evoluírem e crescerem seja na área que for. Por
              isso eu estou em busca de uma formação que me conceda a
              possibilidade de um dia lessionar.
            </p>
            <p>
              Também amo aprender porque evoluir intelectual e fisicamente
              sempre foram objetivos de vida para mim de forma que eu já
              pratiquei diversos esportes e já aprendi diversas áreas do
              conhecimento. Atualmente estou começando o curso de Análise e
              Desenvolvimento de Sistemas e me sinto muito realizado com isso
              pois, sempre foi meu sonho entrar pra a faculdade.
            </p>
            <p>
              Você pode saber um pouco mais sobre mim clicando no botão abaixo.
            </p>
          </S.BoxBody>
        </motion.section>

        <S.BoxButton>
          <motion.div
            transition={{
              duration: 1.2,
              delay: 1,
              type: "spring",
              stiffness: 80,
            }}
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          >
            <C.Button
              label="Sobre mim"
              onAction={() => goTo("/about-me")}
              icon={FiArrowRightCircle}
              iconAfter={true}
              hColor={isDarkMode ? undefined : "#ecf0f1"}
              hBgColor={isDarkMode ? undefined : "#2c3e50"}
              radius="2rem"
            />
          </motion.div>
        </S.BoxButton>
      </S.BoxRight>
    </S.Container>
  );
};
