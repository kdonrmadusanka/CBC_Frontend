import React from 'react';

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center h-screen flex-col gap-4 bg-amber-50'>
        <h2 className='font-BungeeSpice text-2xl'>Login</h2>
        <input type="text" className='text-center font-WinkyRough border-2 border-black font-semibold p-1 rounded-2xl' />
        <input type="password" className='text-center font-WinkyRough border-2 border-black font-semibold p-1 rounded-2xl' />
        <button className='font-BebasNeue border-1 bg-amber-50 rounded-3xl padding w-20 cursor-pointer active:bg-amber-100 active:scale-95'>Login</button>
    </div>
  )
}

export default LoginPage