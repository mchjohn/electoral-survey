import { createContext } from 'react';

type FormErrorProps = {
  email: string;
  password: string;
  message: string;
};

export type FormStateProps = {
  isLoading: boolean;
  email: string;
  password: string;
  error: FormErrorProps;
};

type ContextProps = {
  state: FormStateProps;
  setFormState: (value: FormStateProps) => void;
};

export const FormContext = createContext<ContextProps | {}>({});
