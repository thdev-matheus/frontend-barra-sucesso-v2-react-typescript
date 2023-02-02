import * as yup from "yup";

export const slashQuestionSchema = yup.object().shape({
  issue: yup
    .string()
    .required("campo obrigatório")
    .min(5, "Digite uma atividade válida"),
  doubt: yup.string().required("campo obrigatório"),
  subject: yup.string().required("campo obrigatório"),
  description: yup.string().required("campo obrigatório"),
  code: yup.string().optional(),
  obs: yup.string().optional(),
});
