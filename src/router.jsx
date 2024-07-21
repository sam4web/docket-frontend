import BaseLayout from '@/layout/BaseLayout';
import Home from '@/pages/Home';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<BaseLayout />}>
        <Route index element={<Home />} />
      </Route>
    </>
  )
);

export default router;
