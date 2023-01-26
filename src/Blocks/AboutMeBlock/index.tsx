import * as S from "./styles";

export const AboutMeBlock = () => {
  return (
    <S.Container>
      <S.BoxLeft>
        <span>UM POUCO SOBRE MIM</span>
        <h2>Um Apaixonado Pelos Métodos de Ensino</h2>
        <p>
          Desde sempre eu busco aprender com o intúito de ensinar. Acho
          revigorante a idéia de que eu posso passar meus conhecimentos e ver
          outras pessoas evoluírem e crescerem seja na área que for. Por isso eu
          estou em busca de uma formação que me conceda a possibilidade de um
          dia lessionar.
        </p>
        <p>
          Também amo aprender porque evoluir intelectual e fisicamente sempre
          foram objetivos de vida para mim de forma que eu já pratiquei diversos
          esportes e já aprendi diversas áreas do conhecimento. Atualmente estou
          começando o curso de Análise e Desenvolvimento de Sistemas e me sinto
          muito realizado com isso pois, sempre foi meu sonho entrar pra a
          faculdade.
        </p>
        <p>Você pode saber um pouco mais sobre mim clicando no botão abaixo.</p>
      </S.BoxLeft>
      <S.BoxRight>
        <img src="https://i.ibb.co/NsgKfky/me.png" alt="me" />
      </S.BoxRight>
    </S.Container>
  );
};
