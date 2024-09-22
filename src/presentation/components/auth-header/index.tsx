import { memo } from 'react';

import { Logo } from '../logo';

function AuthHeader() {
  return (
    <header className="text-zinc-50 py-4 pl-10">
      <Logo />
      <h1 className="text-lg">Pesquisa eleitoral</h1>
    </header>
  );
}

export default memo(AuthHeader);
