import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRoutes } from './modules/login/routes';

const MainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela Principal</div>,
    errorElement: <div>Página não encontrada</div>,
  },
];

const router = createBrowserRouter([...MainRoutes, ...loginRoutes]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
