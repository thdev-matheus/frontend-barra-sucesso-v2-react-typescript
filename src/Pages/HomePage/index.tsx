import * as S from "./styles";
import * as B from "../../Blocks";

export const HomePage = () => {
  return (
    <S.Container>
      <B.HeaderBlock />
      <B.WelcomeBlock />
      <B.AboutMeBlock />
      <B.ContactBlock />
      <B.FooterBlock />
      <B.CreditBlock />
    </S.Container>
  );
};
