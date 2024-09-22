import { AiOutlineLoading } from 'react-icons/ai';

import { AuthHeader } from '@/presentation/components/auth-header';
import { Button } from '@/presentation/components/ui/button';
import { Input } from '@/presentation/components/ui/input';

export function Login() {
  return (
    <div className="flex h-screen w-full flex-col">
      <AuthHeader />

      <form action="" className="text-zinc-50 m-auto w-10/12 md:w-96">
        <h2 className="text-lg mb-4">Login</h2>

        <div className="flex flex-col gap-4 md:p-10 md:bg-zinc-900 rounded-md">
          <Input type="email" placeholder="Digite seu e-mail" />
          <Input type="password" placeholder="Digite sua senha" />

          <span className="text-sm text-red-400 -mt-2">
            E-mail e ou senha inválidos
          </span>

          <Button type="submit">
            <AiOutlineLoading className="mr-2 h-4 w-4 animate-spin" />
            Entrar
          </Button>
        </div>

        <div className="flex flex-col mt-6 gap-6">
          <span className="text-center text-sm text-zinc-400">ou</span>
          <span className="text-center text-sm cursor-pointer hover:underline">
            Criar uma conta
          </span>
        </div>
      </form>

      <footer className="h-44 text-zinc-400 flex items-end justify-center pb-8">
        <p>Criado por Michel John - 2024</p>
      </footer>
    </div>
  );
}
