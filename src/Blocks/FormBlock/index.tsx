import { useState } from "react";
import * as T from "./types";
import * as C from "../../Components";
import * as S from "./styles";

import Editor from "react-simple-code-editor";
import Prism, { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-git";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-python";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-regex";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { slashQuestionSchema } from "../../Schemas";
import { FiArrowRightCircle } from "react-icons/fi";
import { useDarkMode, useSlashQuestion } from "../../Contexts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const FormBlock = () => {
  const [issue, setIssue] = useState<boolean>(true);
  const [doubt, setDoubt] = useState<boolean>(false);
  const [subject, setSubject] = useState<boolean>(false);
  const [description, setDescription] = useState<boolean>(false);
  const [codeBox, setCodeBox] = useState<boolean>(false);
  const [obs, setObs] = useState<boolean>(false);

  const [activeOption, setActiveOption] = useState<string>("Javascript");
  const [code, setCode] = useState<string>("");

  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
  };

  const { isDarkMode } = useDarkMode();
  const { editSlashQuestion } = useSlashQuestion();

  const options = [
    "CSS",
    "Django",
    "Docker",
    "Dockerfile",
    "HTML",
    "Javascript",
    "JSON",
    "Markdown",
    "Python",
    "React JSX",
    "React TSX",
    "Regex",
    "SQL",
    "Terminal",
    "TypeScript",
    "YAML",
  ];

  const configEditor = (code: string) => {
    switch (activeOption) {
      case "CSS":
        return highlight(code, Prism.languages.css, "css");
      case "Django" || "Python":
        return highlight(code, Prism.languages.py, "python");
      case "Docker" || "Dockerfile":
        return highlight(code, languages.dockerfile, "dockerfile");
      case "HTML":
        return highlight(code, Prism.languages.html, "html");
      case "JSON":
        return highlight(code, Prism.languages.json, "json");
      case "Markdown":
        return highlight(code, Prism.languages.md, "markdown");
      case "React JSX":
        return highlight(code, Prism.languages.jsx, "javascript");
      case "React TSX":
        return highlight(code, Prism.languages.tsx, "typescript");
      case "Regex":
        return highlight(code, Prism.languages.regex, "regex");
      case "SQL":
        return highlight(code, Prism.languages.sql, "sql");
      case "Terminal":
        return highlight(code, Prism.languages.shell, "bash");
      case "TypeScript":
        return highlight(code, Prism.languages.ts, "typescript");
      case "YAML":
        return highlight(code, Prism.languages.yml, "yml");

      default:
        return highlight(code, languages.js, "javascript");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm<T.ISlashQuestion>({
    resolver: yupResolver(slashQuestionSchema),
    reValidateMode: "onSubmit",
  });

  const handleSlashQuestionSubmit = (data: T.ISlashQuestion) => {
    data.code = code;
    data.language = activeOption;

    toast.success("Sucesso");

    editSlashQuestion(data);

    goTo("/slash-question");
  };

  const verifyIssue = () => {
    if (!getValues().issue) {
      setError("issue", { message: "Campo obrigatório!" });
      return;
    }

    setIssue(false);
    setDoubt(true);
  };

  const verifyDoubt = () => {
    if (!getValues().doubt) {
      setError("doubt", { message: "Campo obrigatório!" });
      return;
    }

    setDoubt(false);
    setSubject(true);
  };

  const verifySubject = () => {
    if (!getValues().subject) {
      setError("subject", { message: "Campo obrigatório!" });
      return;
    }

    setSubject(false);
    setDescription(true);
  };

  const verifyDescription = () => {
    if (!getValues().description) {
      setError("description", { message: "Campo obrigatório!" });
      return;
    }

    setDescription(false);
    setCodeBox(true);
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSlashQuestionSubmit)}>
      {issue && (
        <>
          <p>Digite abaixo o código da atividade que você está agora.</p>
          <S.BoxInput>
            <C.Input
              label="* Estou na atividade..."
              placeholder="Ex.: S2-03"
              height="3.5rem"
              isMask={true}
              mask="S9-99"
              defaultValue={getValues("issue") || ""}
              error={errors.issue?.message}
              {...register("issue")}
            />
          </S.BoxInput>

          <S.BoxControls style={{ justifyContent: "flex-end" }}>
            <h4 onClick={verifyIssue}>Próximo</h4>
          </S.BoxControls>
        </>
      )}

      {doubt && (
        <>
          <p>Digite abaixo a origem da sua dúvida.</p>
          <S.BoxInput>
            <C.Input
              label="Minha dúvida é sobre..."
              placeholder="Ex.: React, Typescript, VS Code..."
              height="3.5rem"
              error={errors.doubt?.message}
              defaultValue={getValues("doubt") || ""}
              {...register("doubt")}
            />
          </S.BoxInput>

          <S.BoxControls>
            <h4
              onClick={() => {
                setDoubt(false);
                setIssue(true);
              }}
            >
              Anterior
            </h4>
            <h4 onClick={verifyDoubt}>Próximo</h4>
          </S.BoxControls>
        </>
      )}

      {subject && (
        <>
          <p>Digite abaixo o assunto relacionado a sua dúvida.</p>
          <S.BoxInput>
            <C.Input
              label="Assunto"
              placeholder="Ex.: DOM, classes, funções, componentes..."
              height="3.5rem"
              defaultValue={getValues("subject") || ""}
              error={errors.subject?.message}
              {...register("subject")}
            />
          </S.BoxInput>

          <S.BoxControls>
            <h4
              onClick={() => {
                setSubject(false);
                setDoubt(true);
              }}
            >
              Anterior
            </h4>
            <h4 onClick={verifySubject}>Próximo</h4>
          </S.BoxControls>
        </>
      )}

      {description && (
        <>
          <p>
            Digite abaixo a descrição mais completa que conseguir de onde você
            procurou, suas tentativas e sua lógica detalhada.
          </p>
          <S.BoxInput>
            <C.TextArea
              label="O que tentei fazer?"
              placeholder="Ex.: Procurei na documentação e tentei usar tal lógica"
              height="250px"
              defaultValue={getValues("description") || ""}
              error={errors.description?.message}
              {...register("description")}
            />
          </S.BoxInput>

          <S.BoxControls>
            <h4
              onClick={() => {
                setDescription(false);
                setSubject(true);
              }}
            >
              Anterior
            </h4>
            <h4 onClick={verifyDescription}>Próximo</h4>
          </S.BoxControls>
        </>
      )}

      {codeBox && (
        <>
          <p>
            Não é obrigatório mas é interessante compartilhar o código que está
            causando problemas em sua aplicação então selecione a linguagem e
            cole no editor o seu código
          </p>
          <S.BoxSelect>
            <C.Select
              activeOpt={activeOption}
              options={options}
              setAction={setActiveOption}
            />
          </S.BoxSelect>
          <S.BoxInput>
            <Editor
              {...register("code")}
              className="editor"
              value={code}
              autoFocus
              onValueChange={(code) => setCode(code)}
              highlight={(code) => configEditor(code)}
              onFocus={(e) => {
                (e.target as HTMLTextAreaElement).selectionStart = (
                  e.target as HTMLTextAreaElement
                ).selectionEnd = (e.target as HTMLTextAreaElement).value.length;
              }}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
              }}
            />
          </S.BoxInput>

          <S.BoxControls>
            <h4
              onClick={() => {
                setCodeBox(false);
                setDescription(true);
              }}
            >
              Anterior
            </h4>
            <h4
              onClick={() => {
                setCodeBox(false);
                setObs(true);
              }}
            >
              Próximo
            </h4>
          </S.BoxControls>
        </>
      )}

      {obs && (
        <>
          <p>
            Nesta seção você pode compartilhar qualquer informação extra que
            pode vir a ajudar o monitor/instrutor que vier lhe atender.
          </p>
          <S.BoxInput>
            <C.TextArea
              label="Considerações finais"
              placeholder="Digite alguma observação"
              defaultValue={getValues("obs") || ""}
              height="250px"
              error={errors.obs?.message}
              {...register("obs")}
            />
          </S.BoxInput>

          <S.BoxControls>
            <h4
              onClick={() => {
                setObs(false);
                setCodeBox(true);
              }}
            >
              Anterior
            </h4>
          </S.BoxControls>

          <S.BoxButton>
            <C.Button
              label="Finalizar"
              onAction={() => {}}
              icon={FiArrowRightCircle}
              iconAfter={true}
              hColor={isDarkMode ? undefined : "#ecf0f1"}
              hBgColor={isDarkMode ? undefined : "#2c3e50"}
              radius="2rem"
            />
          </S.BoxButton>
        </>
      )}
    </S.Container>
  );
};
