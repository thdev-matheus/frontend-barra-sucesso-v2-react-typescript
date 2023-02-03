/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSlashQuestion } from "../../Contexts";

import { toast } from "react-toastify";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import copy from "copy-to-clipboard";

import * as S from "./styles";
import * as C from "../../Components";
import { useNavigate } from "react-router-dom";

export const SlashSuccessBlock = () => {
  const { slashQuestion } = useSlashQuestion();
  const [slashSuccess, setSlashSuccess] = useState<string>("");

  const navigate = useNavigate();

  const goTo = (path: string) => navigate(path);

  const copyToClipboard = (text: string) => {
    copy(text);
    toast.success("Copiado para a área de transferência", {
      icon: "🦆🟢",
      autoClose: 3000,
    });
  };

  useEffect(() => {
    const textSlashSuccess = `Olá, estou na atividade ${
      slashQuestion.issue
    } e estou com uma dúvida de ${slashQuestion.doubt}, sobre ${
      slashQuestion.subject
    }.\n\n* O que tentei fazer: \n\n${slashQuestion.description}\n\n${
      slashQuestion.code &&
      `Vou deixar abaixo o trecho do código que estou com dificuldades.\n\n* Código:`
    }`;

    setSlashSuccess(textSlashSuccess);
  }, []);

  return (
    <S.Container>
      <S.BoxDescriptions>
        <h2>Seu /Sucesso está pronto!</h2>
        <p>
          Como você já sabe, o /pergunta é escrito em duas partes sendo uma a
          parte principal e a segunda, ao enviar, o campo onde você coloca
          informações adicionais.
        </p>
        <p>
          Então basta você copiar e colar no slack. Simples, rápido e fácil.
        </p>
        <p>
          Ah e se você puder e ainda não tiver feito, passa lá nas minhas redes,
          me segue e me dá um feedback, pois, como todo bom desenvolvedor,
          sempre estou buscando me aperfeiçoar.
        </p>
      </S.BoxDescriptions>

      <S.BoxTextCopy>
        <S.BoxCopy>
          <HiOutlineClipboardDocumentList
            title="Copiar para a área de transferência"
            onClick={() => copyToClipboard(slashSuccess)}
          />
        </S.BoxCopy>
        <C.TextArea
          label="/pergunta"
          defaultValue={slashSuccess}
          width="100%"
          height="50vh"
        />
      </S.BoxTextCopy>

      {slashQuestion.code && (
        <>
          <S.BoxDescriptions>
            <p>
              Aqui você copia o seu código para colar ainda antes de passar para
              o próximo passo.
            </p>
            <p>Não esquece de ativar o bloco de código ao escrever no slack.</p>
          </S.BoxDescriptions>

          <S.BoxTextCopy>
            <S.BoxCopy>
              <HiOutlineClipboardDocumentList
                title="Copiar para a área de transferência"
                onClick={() => copyToClipboard(slashQuestion.code!)}
              />
            </S.BoxCopy>
            <C.TextArea
              label="Código"
              defaultValue={slashQuestion.code}
              width="100%"
              height="50vh"
            />
          </S.BoxTextCopy>
        </>
      )}

      <S.BoxDescriptions>
        <p>
          Por fim, você pode enviar a pergunta e ao aparecer a caixa de diálogo
          você pode copiar e colar o texto abaixo no campo de mais informações.
        </p>
      </S.BoxDescriptions>

      <S.BoxTextCopy>
        <S.BoxCopy>
          <HiOutlineClipboardDocumentList
            title="Copiar para a área de transferência"
            onClick={() =>
              copyToClipboard(slashQuestion.obs || "Sem mais observações.")
            }
          />
        </S.BoxCopy>
        <C.TextArea
          label="Mais informações"
          defaultValue={slashQuestion.obs || "Sem mais observações."}
          width="100%"
          height="50vh"
        />
      </S.BoxTextCopy>

      <S.BoxDescriptions>
        <h2>Então é isso!</h2>
        <p>Muito obrigado por usar o app /Sucesso!</p>
        <p>
          Depois dá uma conferida no hall de{" "}
          <span onClick={() => goTo("/devs-hall")}>devs</span> e de{" "}
          <span onClick={() => goTo("/instructors-hall")}>instrutores</span> que
          marcaram a minha passagem pela Kenzie Academy Brasil. São verdadeiros
          mestres que me inspiraram e inspiram até hoje a ser a melhor versão de
          mim.
        </p>
      </S.BoxDescriptions>
    </S.Container>
  );
};
