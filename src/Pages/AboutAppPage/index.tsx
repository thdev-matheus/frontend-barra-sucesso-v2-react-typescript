import * as S from "./styles";
import * as B from "../../Blocks";

export const AboutAppPage = () => {
  return (
    <S.Container>
      <B.HeaderBlock />
      <B.HistoryAppBlock />

      <B.FooterBlock />
      <B.CreditBlock />
    </S.Container>
  );
};
