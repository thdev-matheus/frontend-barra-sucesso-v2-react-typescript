import Dropdown from "react-bootstrap/Dropdown";
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
}: T.ISelectProps) => {
  const [display, setDisplay] = useState<string>("none");

  return (
    <S.Container
      width={width}
      height={height}
      margin={margin}
      radius={radius}
      color={color}
      bgColor={bgColor}
    >
      <span>{label}</span>
      <Dropdown>
        <Dropdown.Toggle onClick={() => setDisplay("flex")}>
          {activeOpt}
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ display: display }}>
          {options.map((opt, i) => (
            <Dropdown.Item
              key={i}
              onClick={() => {
                setAction(opt);
                setDisplay("none");
              }}
            >
              {opt}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </S.Container>
  );
};
