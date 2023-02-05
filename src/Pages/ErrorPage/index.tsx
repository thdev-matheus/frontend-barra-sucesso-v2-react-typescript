import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const goTo = (path: string) => navigate(path);

  return (
    <S.Container>
      <img src="https://i.ibb.co/7vwJZNB/Bug-Fix.png" alt="error-img" />
      <div>
        <h2>OPS,</h2>
        <h2>
          Parece que a página que você está tentando acessar não existe ou ainda
          está em construção
        </h2>
        <span onClick={() => goTo("/")}>Home</span>
      </div>
    </S.Container>
  );
};
