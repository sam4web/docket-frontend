import { LuPlus } from 'react-icons/lu';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <asdie className='px-4 py-4 lg:py-6 border-transparent border-r dark:border-slate-700 border-zinc-300'>
      <div className='sm:space-y-9 sm:block flex-between'>
        <Link to='/'>
          <h2 className='text-xl font-medium dark:text-light text-dark select-none cursor-pointer'>
            docket
          </h2>
        </Link>
        <div className='flex-center flex-col sm:space-y-5'>
          <button className='bg-dark  text-light text-2xl p-2 rounded-full shadow-sm border-2 border-light'>
            <LuPlus />
          </button>
        </div>
      </div>
    </asdie>
  );
};

export default Sidebar;
