import * as S from "./styles";
import * as B from "../../Blocks";

export const DevsHallPage = () => {
  return (
    <S.Container>
      <B.HeaderBlock />
      <B.DevsBlock />
      <B.FooterBlock identifierTo="#homeDevs" />
      <B.CreditBlock />
    </S.Container>
  );
};
