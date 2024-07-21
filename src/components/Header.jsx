import { IoSearchOutline, IoPersonOutline } from 'react-icons/io5';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  return (
    <header>
      <section className='flex-between gap-1'>
        <div className='flex-1 sm:w-full max-w-xs border-2 shadow-sm px-3 py-2 rounded-lg flex-between space-x-2 group hover:border-dark dark:border-light'>
          <label
            htmlFor='search'
            className='dark:text-light dark:group-focus-within:text-light text-zinc-500 group-focus-within:text-dark text-2xl'
          >
            <IoSearchOutline />
          </label>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search'
            className='text-dark dark:text-light outline-none flex-1 placeholder:text-zinc-500 focus:placeholder:text-transparent bg-transparent'
          />
        </div>

        <div className='space-x-1 sm:space-x-2.5'>
          <button className='btn'>
            <IoPersonOutline />
          </button>
          <ThemeToggler />
        </div>
      </section>
    </header>
  );
};

export default Header;
