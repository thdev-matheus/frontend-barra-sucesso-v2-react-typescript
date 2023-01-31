import * as S from "./styles";
import * as T from "./types";

export const Button = ({
  label,
  onAction,
  width,
  height,
  icon: Icon,
  iconAfter = false,
  iconSize,
  fontSize,
  color,
  bgColor,
  hColor,
  hBgColor,
  radius,
  type,
}: T.IButtonProps) => {
  return (
    <S.SButton
      iconAfter={iconAfter}
      iconSize={iconSize}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      bgColor={bgColor}
      hColor={hColor}
      hBgColor={hBgColor}
      radius={radius}
      onClick={onAction}
      type={type}
    >
      {Icon && <Icon />}
      {label}
    </S.SButton>
  );
};

// eslint-disable-next-line no-lone-blocks
{
  /* <C.Button
  label=""
  onAction={() => {}}
  width=""
  height=""
  icon={}
  iconAfter={true}
  iconSize=""
  fontSize=""
  color=""
  bgColor=""
  hColor=""
  hBgColor=""
  radius=""
/> */
}
