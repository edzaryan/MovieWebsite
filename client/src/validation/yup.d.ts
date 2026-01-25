import * as Yup from 'yup';

declare module 'yup' {
    interface StringSchema {
        firstLetterUppercase(message?: string): StringSchema;
    }
}