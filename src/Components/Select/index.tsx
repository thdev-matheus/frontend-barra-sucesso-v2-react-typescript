import * as T from "./types";
import * as S from "./styles";
import { useState } from "react";

export const Select = ({
  label,
  options,
  activeOpt,
  setAction,
  margin,
  width,
  height,
  radius,
  color,
  bgColor,
  fontSize,
  hBgColor,
  hcolor,
}: T.ISelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  console.log(isOpen);

  return (
    <S.Container color={color}>
      {label && <span>{label}</span>}
      <S.Dropdown width={width} height={height}>
        <S.Toggle
          radius={radius}
          color={color}
          bgColor={bgColor}
          fontSize={fontSize}
          onClick={toggleIsOpen}
          hColor={hcolor}
          hBgColor={hBgColor}
        >
          <span>{activeOpt}</span>
        </S.Toggle>

        {isOpen && (
          <S.Menu
            width={width}
            height={height}
            margin={margin}
            transition={{
              duration: 0.8,
            }}
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            {options.map((option, index) => (
              <span
                key={index}
                onClick={() => {
                  setAction(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </span>
            ))}
          </S.Menu>
        )}
      </S.Dropdown>
    </S.Container>
  );
};
