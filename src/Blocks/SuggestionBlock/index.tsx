import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import * as S from "./styles";
import * as C from "../../Components";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { toast } from "react-toastify";

export const SuggestionBlock = () => {
  const [text, setText] = useState<string>("");

  const handleMailTo = async () => {
    if (text !== "") {
      setText("");

      window.location.href = `mailto:matheusth.dev@gmail.com?subject=Sugestão Para o /Sucesso&body=${text.replace(
        /\n/g,
        " "
      )}`;
    } else {
      toast.error("Preencha todos os dados", {
        icon: "🦆🔴",
        autoClose: 3000,
      });
    }
  };

  return (
    <S.Container id="homeSuggestions">
      <S.BoxContact>
        <h2>
          Você pode me dar sugestões através das minhas redes ou me enviando um
          e-mail
        </h2>
        <S.BoxSocial>
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
          <a
            href="https://wa.me/5581996336588"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp color="#4cd964" />
          </a>
        </S.BoxSocial>
      </S.BoxContact>

      <S.BoxMail>
        <C.TextArea
          label="Digite sua sugestão"
          value={text}
          onChange={(e) => setText(e.target.value)}
          height="100%"
        />
        <S.BoxSend>
          <IoMdSend title="Enviar" onClick={handleMailTo} />
        </S.BoxSend>
      </S.BoxMail>
    </S.Container>
  );
};
