import { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import { AuthHeader, AuthLink, Footer } from '@/presentation/components';
import { Button } from '@/presentation/components/ui/button';
import { Input } from '@/presentation/components/ui/input';
import { FormContext } from '@/presentation/contexts/form/form-context';

type FormStateProps = {
  isLoading: boolean;
  errorMessage: string;
};

export function Login() {
  const [formState, setFormState] = useState<FormStateProps>({
    isLoading: false,
    errorMessage: '',
  });

  return (
    <div className="flex h-screen w-full flex-col">
      <AuthHeader />

      <FormContext.Provider value={formState}>
        <form action="" className="text-zinc-50 m-auto w-10/12 md:w-96">
          <h2 className="text-lg mb-4">Login</h2>

          <div
            className="flex flex-col gap-4 md:p-10 md:bg-zinc-900 rounded-md"
            data-testid="form-content"
          >
            <Input type="email" placeholder="Digite seu e-mail" />
            <Input type="password" placeholder="Digite sua senha" />

            {formState.errorMessage && (
              <span className="text-sm text-red-400 -mt-2">
                E-mail e ou senha inválidos
              </span>
            )}

            <Button type="submit" data-testid="form-button">
              {formState.isLoading && (
                <AiOutlineLoading className="mr-2 h-4 w-4 animate-spin" />
              )}
              Entrar
            </Button>
          </div>

          <AuthLink text="Criar uma conta" />
        </form>
      </FormContext.Provider>

      <Footer />
    </div>
  );
}
