import { ReactNode } from "react";

export interface ISlashQuestionContextData {
  slashQuestion: ISlashQuestion;
  editSlashQuestion: (value: ISlashQuestion) => void;
}

export interface ISlashQuestion {
  issue: string;
  doubt: string;
  subject: string;
  description: string;
  code?: string;
  obs?: string;
  language?: string;
}

export interface ISlashQuestionProviderData {
  children: ReactNode;
}
