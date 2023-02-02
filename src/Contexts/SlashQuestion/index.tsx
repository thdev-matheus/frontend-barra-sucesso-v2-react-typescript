import { useState, createContext, useContext } from "react";
import * as T from "./types";

const SlashQuestionContext = createContext<T.ISlashQuestionContextData>(
  {} as T.ISlashQuestionContextData
);

export const useSlashQuestion = () => {
  const context = useContext(SlashQuestionContext);

  return context;
};

export const SlashQuestionProvider = ({
  children,
}: T.ISlashQuestionProviderData) => {
  const [slashQuestion, setSlashQuestion] = useState<T.ISlashQuestion>(
    {} as T.ISlashQuestion
  );

  const editSlashQuestion = (value: T.ISlashQuestion) => {
    setSlashQuestion(value);
  };

  return (
    <SlashQuestionContext.Provider value={{ editSlashQuestion, slashQuestion }}>
      {children}
    </SlashQuestionContext.Provider>
  );
};
