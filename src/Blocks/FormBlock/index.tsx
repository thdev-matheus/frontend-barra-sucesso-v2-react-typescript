import { useState } from "react";
import * as T from "./types";
import * as C from "../../Components";
import * as S from "./styles";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { cursorTo } from "readline";

export const FormBlock = () => {
  const [issue, setIssue] = useState<T.IIssue>({ isOpen: true, value: "" });
  const [doubt, setDoubt] = useState<T.IDoubt>({ isOpen: false, value: "" });
  const [subject, setSubject] = useState<T.ISubject>({
    isOpen: false,
    value: "",
  });
  const [attempt, setAttempt] = useState<T.IAttempt>({
    isOpen: false,
    value: "",
  });
  const [description, setDescription] = useState<T.IDescription>({
    isOpen: false,
    value: "",
  });
  const [code, setCode] = useState<T.ICode>({ isOpen: false, value: "" });
  const [obs, setObs] = useState<T.IObs>({ isOpen: false, value: "" });

  console.log(issue.value);

  const BoxIssue = () => {
    return (
      <>
        <p>Digite abaixo o código da atividade que você está agora.</p>
        <S.BoxInput>
          <C.Input
            label="Estou na atividade..."
            placeholder="Ex.: S2-03"
            height="3.5rem"
            value={issue.value}
            autoFocus
            onChange={(e) => {
              e.preventDefault();
              setIssue({ ...issue, value: e.target.value });
            }}
          />
        </S.BoxInput>

        <S.BoxControls style={{ justifyContent: "flex-end" }}>
          <h4
            onClick={() => {
              setIssue({ ...issue, isOpen: false });
              setDoubt({ ...doubt, isOpen: true });
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
            value={doubt.value}
            autoFocus
            onChange={(e) => {
              e.preventDefault();
              setDoubt({ ...doubt, value: e.target.value });
            }}
          />
        </S.BoxInput>

        <S.BoxControls>
          <h4
            onClick={() => {
              setDoubt({ ...doubt, isOpen: false });
              setIssue({ ...issue, isOpen: true });
            }}
          >
            Anterior
          </h4>
          <h4
            onClick={() => {
              setDoubt({ ...doubt, isOpen: false });
              setSubject({ ...subject, isOpen: true });
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
            value={subject.value}
            autoFocus
            onChange={(e) => {
              e.preventDefault();
              setSubject({ ...subject, value: e.target.value });
            }}
          />
        </S.BoxInput>

        <S.BoxControls>
          <h4
            onClick={() => {
              setSubject({ ...subject, isOpen: false });
              setDoubt({ ...doubt, isOpen: true });
            }}
          >
            Anterior
          </h4>
          <h4
            onClick={() => {
              setSubject({ ...subject, isOpen: false });
              setAttempt({ ...attempt, isOpen: true });
            }}
          >
            Próximo
          </h4>
        </S.BoxControls>
      </>
    );
  };

  const BoxAttempt = () => {
    return (
      <>
        <p>
          Digite abaixo uma breve descrição de onde você procurou e suas
          tentativas.
        </p>
        <S.BoxInput>
          <C.TextArea
            label="O que tentei fazer?"
            placeholder="Ex.: Procurei na documentação e tentei usar tal lógica"
            value={attempt.value.split("").reverse().join("")}
            onChange={(e) => {
              setAttempt({ ...attempt, value: e.target.value });
            }}
            // terei de usar o useForm aqui então é melhor criar um schema para todo o formulário e no fim colocar um botão de submit
            autoFocus
          />
        </S.BoxInput>

        <S.BoxControls>
          <h4
            onClick={() => {
              setAttempt({ ...attempt, isOpen: false });
              setSubject({ ...subject, isOpen: true });
            }}
          >
            Anterior
          </h4>
          <h4
            onClick={() => {
              setAttempt({ ...attempt, isOpen: false });
              setDescription({ ...description, isOpen: true });
            }}
          >
            Próximo
          </h4>
        </S.BoxControls>
      </>
    );
  };

  return (
    <S.Container>
      {issue.isOpen && <BoxIssue />}
      {doubt.isOpen && <BoxDoubt />}
      {subject.isOpen && <BoxSubject />}
      {attempt.isOpen && <BoxAttempt />}
    </S.Container>
  );
};
