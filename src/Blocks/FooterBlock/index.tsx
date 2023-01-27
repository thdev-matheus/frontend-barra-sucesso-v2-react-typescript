import * as S from "./styles";
import * as C from "../../Components";
import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiArrowUpCircle,
} from "react-icons/fi";

export const FooterBlock = () => {
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
          <li>Hall de devs</li>
          <li>Sugestões</li>
          <li>Contribua</li>
        </S.Links>
      </S.BoxLinks>

      <S.BoxLinks>
        <h2>Mapa da página</h2>
        <S.Links>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutMe">Sobre mim</a>
          </li>
          <li>
            <a href="#aboutApp">Sobre o app</a>
          </li>
          <li>
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
