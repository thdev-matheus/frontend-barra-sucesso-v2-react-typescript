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
  // const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);

  return (
    <S.Container>
      <B.HeaderBlock />
      <B.FormBlock />
      {/* <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js, "jsx")}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      /> */}

      <B.FooterBlock />
      <B.CreditBlock />
    </S.Container>
  );
};
