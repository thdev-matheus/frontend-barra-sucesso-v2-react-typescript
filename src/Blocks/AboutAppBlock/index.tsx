import * as S from "./styles";
import * as C from "../../Components";
import { motion } from "framer-motion";
import { FiArrowRightCircle } from "react-icons/fi";
import { useDarkMode } from "../../Contexts";
import { useNavigate } from "react-router-dom";

export const AboutAppBlock = () => {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const goTo = (path: string) => navigate(path);

  return (
    <S.Container id="aboutApp">
      <S.BoxTitle>
        <span>MAS COMO ASSIM, /SUCESSO?</span>
        <h2>Como Tudo Aconteceu...</h2>
      </S.BoxTitle>

      <S.BoxBody>
        <motion.div>
          <p>
            A ídeia de criar uma aplicação que pudesse ajudar os devs a
            elaborarem bons /perguntas veio quando eu estava na metade do M3 na
            Kenzie Academy Brasil. Na época eu era monitor do M2 e percebi que
            alguns devs, ao pedirem ajuda, não sabiam explicar ao certo o que
            precisavam saber.
          </p>
          <p>
            Como monitor, sempre gostei de ajudar ao máximo e com isso cheguei a
            conclusão que criar uma solução com um passo-a-passo em que os devs
            pudessem mapear as suas dúvidas era algo necessário para o bom
            andamento do módulo...
          </p>
        </motion.div>

        <S.BoxButton>
          <motion.div>
            <C.Button
              label="Ler mais"
              onAction={() => goTo("/about-app")}
              icon={FiArrowRightCircle}
              iconAfter={true}
              hColor={isDarkMode ? undefined : "#ecf0f1"}
              hBgColor={isDarkMode ? undefined : "#2c3e50"}
              radius="2rem"
            />
          </motion.div>
        </S.BoxButton>
      </S.BoxBody>
    </S.Container>
  );
};
