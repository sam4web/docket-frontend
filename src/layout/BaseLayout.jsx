import { Sidebar, Header } from '@/components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main className='size-full min-h-screen dark:bg-slate-900 bg-slate-200 flex-center sm:p-5'>
        <div className='w-screen h-screen sm:w-[94vw] sm:h-[96vh] lg:h-[92vh]'>
          <div className='size-full dark:bg-dark bg-white sm:shadow-sm flex sm:rounded-2xl flex-col-reverse sm:flex-row'>
            <Sidebar />
            <div className='px-4 md:px-8 lg:px-16 py-4 lg:py-6 flex-1 space-y-5 md:space-y-10'>
              <Header />
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
