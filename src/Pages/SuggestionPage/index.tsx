import * as S from "./styles";
import * as B from "../../Blocks";

export const SuggestionsPage = () => {
  return (
    <S.Container>
      <B.HeaderBlock />
      <B.SuggestionBlock />
      <B.FooterBlock identifierTo="#homeSuggestions" />
      <B.CreditBlock />
    </S.Container>
  );
};
