import * as S from "./styles";
import * as B from "../../Blocks";
// import * as C from "../../Components";

// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css";
// import { useState } from "react";

export const FormPage = () => {

  return (
    <S.Container>
      <B.HeaderBlock />
      <B.FormBlock />

      <B.CreditBlock />
    </S.Container>
  );
};
