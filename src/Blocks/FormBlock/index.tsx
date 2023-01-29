import { useState } from "react";
import * as T from "./types";
import * as C from "../../Components";
import * as S from "./styles";

export const FormBlock = () => {
  const [issue, setIssue] = useState<T.IIssue>({ isOpen: true, value: "" });
  const [doubt, setDoubt] = useState<T.IDoubt>({ isOpen: false, value: "" });
  const [subject, setSubject] = useState<T.ISubject>({
    isOpen: false,
    value: "",
  });
  const [docSearch, setDocSearch] = useState<T.IDocSearch>({
    isOpen: false,
    value: "",
  });
  const [blogs, setBlogs] = useState<T.IBlogs>({ isOpen: false, value: "" });
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
            label="Atividade"
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
            label="Dúvida"
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
          <h4>Próximo</h4>
        </S.BoxControls>
      </>
    );
  };

  return (
    <S.Container>
      {issue.isOpen && <BoxIssue />}
      {doubt.isOpen && <BoxDoubt />}
    </S.Container>
  );
};
