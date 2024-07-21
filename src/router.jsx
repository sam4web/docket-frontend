import BaseLayout from '@/layout/BaseLayout';
import Home from '@/pages/Home';
import CreateNote from './pages/CreateNote';

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
        <Route path='create' element={<CreateNote />} />
      </Route>
    </>
  )
);

export default router;
