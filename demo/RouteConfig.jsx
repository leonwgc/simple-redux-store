import { lazy } from 'react';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./afr/App')),
  },
];

export default routes;
