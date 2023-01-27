import * as S from "./styles";
import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiArrowUpCircle,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const FooterBlock = () => {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
  };

  return (
    <S.Container>
      <S.BoxSocial>
        <h2>Siga-me nas redes</h2>
        <S.BoxIcons>
          <a
            href="https://www.instagram.com/dev.ilustra/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram color="#f368e0" />
          </a>
          <a
            href="https://twitter.com/thdev_matheus"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter color="#0abde3" />
          </a>
          <a
            href="https://www.linkedin.com/in/th-matheus/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin color="#2e86de" />
          </a>
          <a
            href="https://github.com/thdev-matheus"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub color="#000" />
          </a>
        </S.BoxIcons>
      </S.BoxSocial>

      <S.BoxLinks>
        <h2>Links Úteis</h2>
        <S.Links>
          <li onClick={() => goTo("/dev-hall")}>Hall de devs</li>
          <li onClick={() => goTo("/suggestions")}>Sugestões</li>
          <li onClick={() => goTo("/contribute")}>Contribua</li>
        </S.Links>
      </S.BoxLinks>

      <S.BoxLinks>
        <h2>Mapa da página</h2>
        <S.Links>
          <li onClick={() => goTo("/")}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => goTo("/")}>
            <a href="#aboutMe">Sobre mim</a>
          </li>
          <li onClick={() => goTo("/")}>
            <a href="#aboutApp">Sobre o app</a>
          </li>
          <li onClick={() => goTo("/")}>
            <a href="#contact">Contato</a>
          </li>
        </S.Links>
      </S.BoxLinks>

      <S.BoxButton>
        <a href="#home">
          <div>
            <FiArrowUpCircle />
          </div>
        </a>
      </S.BoxButton>
    </S.Container>
  );
};
