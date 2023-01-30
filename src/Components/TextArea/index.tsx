import * as S from "./styles";
import * as T from "./types";

import { forwardRef } from "react";

export const TextArea = forwardRef<HTMLTextAreaElement, T.ITextAreaProps>(
  (
    {
      label,
      error,
      width,
      height,
      bgColor,
      borderColor,
      borderRadius,
      color,
      ...rest
    },
    ref
  ) => {
    return (
      <S.Container
        width={width}
        height={height}
        bgColor={bgColor}
        color={color}
      >
        <div>
          {label} {!!error && <span> - {error}</span>}
        </div>
        <S.InputContainer
          isErrored={!!error}
          borderColor={borderColor}
          borderRadius={borderRadius}
          color={color}
        >
          <textarea {...rest} ref={ref} />
        </S.InputContainer>
      </S.Container>
    );
  }
);
