import * as S from "./styles";
import * as B from "../../Blocks";

export const AboutMePage = () => {
  return (
    <S.Container>
      <B.HeaderBlock />
      <B.HistoryMeBlock />

      <B.FooterBlock identifierTo="#homeAboutMe" />
      <B.CreditBlock />
    </S.Container>
  );
};
