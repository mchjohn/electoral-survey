import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '@/presentation/pages/login/login';

export function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
