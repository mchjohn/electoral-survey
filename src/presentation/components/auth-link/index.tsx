import { memo } from 'react';

type Props = {
  text: 'Criar uma conta' | 'Entrar';
};

function AuthLink({ text }: Props) {
  return (
    <div className="flex flex-col mt-6 gap-6">
      <span className="text-center text-sm text-zinc-400">ou</span>
      <span className="text-center text-sm cursor-pointer hover:underline">
        {text}
      </span>
    </div>
  );
}

export default memo(AuthLink);
