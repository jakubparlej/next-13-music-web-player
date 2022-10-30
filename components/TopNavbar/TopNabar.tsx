import React from 'react';
import Button from '../../ui/Button';

const TopNabar = () => {
  return (
    <header className='flex justify-between sm:grid sm:grid-cols-[52px_1fr] p-6 gap-x-6 sm:p-8 w-full sm:justify-start align-center justify-items-center'>
      <img src='/logo.png' alt='Logo' className='col-start-1' />
      <div className='hidden sm:flex md:col-start-2 sm:w-full sm:justify-between sm:align-center'>
        <div className='flex '>
          <img src='/icons/search.svg' alt='search icon' className='mr-4 w-4' />
          <input
            type='text'
            className='bg-transparent outline-none text-md placeholder:text-gray-600'
            placeholder='Search'
          />
        </div>
        <Button variant='primary' text='Log in' />
      </div>
      <img className='sm:hidden' src="/icons/menu.svg" alt="Menu icon" />
    </header>
  );
};

export default TopNabar;
