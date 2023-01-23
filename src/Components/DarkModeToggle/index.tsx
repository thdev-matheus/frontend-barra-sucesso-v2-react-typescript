import { useDarkMode } from "../../Contexts";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IDarkModeButtonProps } from "./types";
import { Container } from "./styles";

export const DarkModeToggle = ({
  backgroundColor,
  color,
  height,
  width,
  borderRadius,
}: IDarkModeButtonProps) => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const changeDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Container
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      onClick={changeDarkMode}
    >
      {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
    </Container>
  );
};
