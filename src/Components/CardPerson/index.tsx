import * as T from "./types";
import * as S from "./styles";
import { FiLinkedin } from "react-icons/fi";

export const CardPerson = ({ person }: T.ICardPersonProps) => {
  return (
    <S.Container>
      <S.BoxImg>
        <img src={person.img} alt="profile" />
      </S.BoxImg>
      <S.BoxSocial>
        {person.linkedin && (
          <a href={person.linkedin} target="_blank" rel="noreferrer">
            <div>
              <FiLinkedin />
            </div>
          </a>
        )}
      </S.BoxSocial>
      <h2>{person.name}</h2>
    </S.Container>
  );
};
