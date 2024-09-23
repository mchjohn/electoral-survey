import { createContext } from 'react';

type FormErrorProps = {
  email: string;
  password: string;
  message: string;
};

export type FormStateProps = {
  isLoading: boolean;
  error: FormErrorProps;
};

export const FormContext = createContext<FormStateProps | {}>({});
