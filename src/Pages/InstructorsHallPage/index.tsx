import * as S from "./styles";
import * as B from "../../Blocks";

export const InstructorsHallPage = () => {
  return (
    <S.Container>
      <B.HeaderBlock />
      <B.InstructorsBlock />
      <B.FooterBlock identifierTo="#homeInstructors" />
      <B.CreditBlock />
    </S.Container>
  );
};
