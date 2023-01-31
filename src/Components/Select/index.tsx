import Dropdown from "react-bootstrap/Dropdown";
import * as T from "./types";
import * as S from "./styles";

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
        <Dropdown.Toggle>{activeOpt}</Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((opt, i) => (
            <Dropdown.Item
              key={i}
              onClick={() => {
                setAction(opt);
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
