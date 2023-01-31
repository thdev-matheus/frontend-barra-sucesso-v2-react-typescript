import { useState } from "react";
import * as T from "./types";
import * as C from "../../Components";
import * as S from "./styles";

// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css";
// import { cursorTo } from "readline";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { slashQuestionSchema } from "../../Schemas";

export const FormBlock = () => {
  const [issue, setIssue] = useState<boolean>(true);
  const [doubt, setDoubt] = useState<boolean>(false);
  const [subject, setSubject] = useState<boolean>(false);
  const [description, setDescription] = useState<boolean>(false);
  const [code, setCode] = useState<boolean>(false);
  const [obs, setObs] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<string>("Javascript");

  const options = [
    "CSS",
    "Django",
    "Docker",
    "Dockerfile",
    "GIT",
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

  const configEditor = () => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T.ISlashQuestion>({
    resolver: yupResolver(slashQuestionSchema),
    reValidateMode: "onSubmit",
  });

  const handleSlashQuestionSubmit = (data: T.ISlashQuestion) => {
    console.log(data);
  };

  const handleErrors = () => {
    if (errors.issue) {
      setIssue(true);
      setDoubt(false);
      setSubject(false);
      setDescription(false);
      setCode(false);
      setObs(false);
    } else if (errors.doubt) {
      setIssue(false);
      setDoubt(true);
      setSubject(false);
      setDescription(false);
      setCode(false);
      setObs(false);
    } else if (errors.subject) {
      setIssue(false);
      setDoubt(false);
      setSubject(true);
      setDescription(false);
      setCode(false);
      setObs(false);
    } else if (errors.description) {
      setIssue(false);
      setDoubt(false);
      setSubject(false);
      setDescription(true);
      setCode(false);
      setObs(false);
    } else if (errors.code) {
      setIssue(false);
      setDoubt(false);
      setSubject(false);
      setDescription(false);
      setCode(true);
      setObs(false);
    } else if (errors.obs) {
      setIssue(false);
      setDoubt(false);
      setSubject(false);
      setDescription(false);
      setCode(false);
      setObs(true);
    }
  };

  handleErrors();

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
              setCode(true);
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
          <C.TextArea
            label="Código"
            placeholder="Ex.: Procurei na documentação e tentei usar tal lógica"
            height="250px"
            error={errors.code?.message}
            {...register("code")}
          />
        </S.BoxInput>

        <S.BoxControls>
          <h4
            onClick={() => {
              setCode(false);
              setDescription(true);
            }}
          >
            Anterior
          </h4>
          <h4
            onClick={() => {
              setCode(false);
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
      {code && <BoxCode />}
    </S.Container>
  );
};
