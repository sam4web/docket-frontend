import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main className='size-full min-h-screen'>
        <Header />
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
