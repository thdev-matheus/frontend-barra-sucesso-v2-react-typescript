import * as T from "./types";
import * as S from "./styles";

export const Separator = ({
  bgColor,
  height,
  identifier,
  width = "100vw",
  children,
}: T.ISeparatorProps) => {
  return (
    <S.Container
      id={identifier}
      bgColor={bgColor}
      height={height}
      width={width}
    >
      {children}
    </S.Container>
  );
};
