import { firstLetterUppercase } from "./rules";
import * as Yup from "yup";

export const nameSchema = Yup.string()
  .required("Name is required")
  .test(
    "first-letter-uppercase",
    "The first letter must be uppercase",
    firstLetterUppercase
  );
