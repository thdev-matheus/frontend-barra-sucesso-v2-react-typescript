import * as S from "./styles";
import * as B from "../../Blocks";
import { useState } from "react";

export const HomePage = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);

  console.log(scrollTop);

  return (
    <S.Container
      id="homepage"
      onScroll={(_) => {
        const html = document.getElementById("homepage");

        setScrollTop(html!.scrollTop);
      }}
    >
      {(scrollTop <= 100 || scrollTop >= 600) && <B.HeaderBlock />}
      <B.WelcomeBlock />
      <B.AboutMeBlock />
      <B.AboutAppBlock />
      <B.ContactBlock />
      <B.FooterBlock />
      <B.CreditBlock />
    </S.Container>
  );
};
