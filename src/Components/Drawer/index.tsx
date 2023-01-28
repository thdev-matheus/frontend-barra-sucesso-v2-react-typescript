import * as S from "./styles";
import * as T from "./types";
import * as C from "../";

import { AnimatePresence, motion } from "framer-motion";

import { IoMdClose } from "react-icons/io";

import { useDarkMode } from "../../Contexts";

export const Drawer = ({ actionClose, children }: T.IDrawerProps) => {
  const { isDarkMode } = useDarkMode();

  return (
    <AnimatePresence>
      <S.Container>
        <motion.section
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          initial={{
            elevation: 5,
            opacity: 0,
            x: -300,
          }}
          animate={{
            elevation: 5,
            opacity: 1,
            x: 0,
          }}
        >
          <S.BoxSurface>
            <S.BoxSettings>
              <div className="settings">
                <C.DarkModeToggle color={isDarkMode ? "#f1c40f" : "#7f8c8d"} />
              </div>
              <IoMdClose className="close_drawer" onClick={actionClose} />
            </S.BoxSettings>
            <S.BoxChildren>{children}</S.BoxChildren>
          </S.BoxSurface>
        </motion.section>
        <S.DeadArea onClick={actionClose} />
      </S.Container>
    </AnimatePresence>
  );
};
