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

export const FormBlock = () => {
  const [issue, setIssue] = useState<boolean>(false);
  const [doubt, setDoubt] = useState<boolean>(false);
  const [subject, setSubject] = useState<boolean>(false);
  const [description, setDescription] = useState<boolean>(false);
  const [codeBox, setCodeBox] = useState<boolean>(true);
  const [obs, setObs] = useState<boolean>(false);

  const [activeOption, setActiveOption] = useState<string>("Javascript");
  const [code, setCode] = useState<string>("");

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
  } = useForm<T.ISlashQuestion>({
    resolver: yupResolver(slashQuestionSchema),
    reValidateMode: "onSubmit",
  });

  const handleSlashQuestionSubmit = (data: T.ISlashQuestion) => {
    console.log(data);
  };

  const handleErrors = () => {
    const values = getValues();
    if (!values.issue) {
      setIssue(true);
      setDoubt(false);
      setSubject(false);
      setDescription(false);
      setCodeBox(false);
      setObs(false);
    } else if (!values.doubt) {
      setIssue(false);
      setDoubt(true);
      setSubject(false);
      setDescription(false);
      setCodeBox(false);
      setObs(false);
    } else if (!values.subject) {
      setIssue(false);
      setDoubt(false);
      setSubject(true);
      setDescription(false);
      setCodeBox(false);
      setObs(false);
    } else if (!values.description) {
      setIssue(false);
      setDoubt(false);
      setSubject(false);
      setDescription(true);
      setCodeBox(false);
      setObs(false);
    } else if (!values.code) {
      setIssue(false);
      setDoubt(false);
      setSubject(false);
      setDescription(false);
      setCodeBox(true);
      setObs(false);
    } else if (!values.obs) {
      setIssue(false);
      setDoubt(false);
      setSubject(false);
      setDescription(false);
      setCodeBox(false);
      setObs(true);
    }
  };

  const BoxIssue = () => {
    return (
      <>
        <p>Digite abaixo o código da atividade que você está agora.</p>
        <S.BoxInput>
          <C.Input
            label="* Estou na atividade..."
            placeholder="Ex.: S2-03"
            height="3.5rem"
            isMask={true}
            mask="S9-99"
            error={errors.issue?.message}
            {...register("issue")}
          />
        </S.BoxInput>

        <S.BoxControls style={{ justifyContent: "flex-end" }}>
          <h4
            onClick={() => {
              setIssue(false);
              setDoubt(true);
            }}
          >
            Próximo
          </h4>
        </S.BoxControls>
      </>
    );
  };

  const BoxDoubt = () => {
    return (
      <>
        <p>Digite abaixo a origem da sua dúvida.</p>
        <S.BoxInput>
          <C.Input
            label="Minha dúvida é sobre..."
            placeholder="Ex.: React, Typescript, VS Code..."
            height="3.5rem"
            error={errors.doubt?.message}
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
          <h4
            onClick={() => {
              setDoubt(false);
              setSubject(true);
            }}
          >
            Próximo
          </h4>
        </S.BoxControls>
      </>
    );
  };

  const BoxSubject = () => {
    return (
      <>
        <p>Digite abaixo o assunto relacionado a sua dúvida.</p>
        <S.BoxInput>
          <C.Input
            label="Assunto"
            placeholder="Ex.: DOM, classes, funções, componentes..."
            height="3.5rem"
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
          <h4
            onClick={() => {
              setSubject(false);
              setDescription(true);
            }}
          >
            Próximo
          </h4>
        </S.BoxControls>
      </>
    );
  };

  const BoxDescription = () => {
    return (
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
          <h4
            onClick={() => {
              setDescription(false);
              setCodeBox(true);
            }}
          >
            Próximo
          </h4>
        </S.BoxControls>
      </>
    );
  };

  const BoxCode = () => {
    return (
      <>
        <p>
          Não é obrigatório mas é interessante compartilhar o código que está
          causando problemas em sua aplicação então selecione a linguagem e cole
          no editor o seu código
        </p>
        <S.BoxSelect>
          <C.Select
            label=""
            activeOpt={activeOption}
            options={options}
            setAction={setActiveOption}
            height="3.2rem"
            width="20rem"
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
    );
  };

  return (
    <S.Container
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {issue && <BoxIssue />}
      {doubt && <BoxDoubt />}
      {subject && <BoxSubject />}
      {description && <BoxDescription />}
      {codeBox && <BoxCode />}
    </S.Container>
  );
};
