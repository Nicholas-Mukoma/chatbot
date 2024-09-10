import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row w-full px-12 mt-3'>
        <div>
            <h1 className='text-sm xl:text-lg font-bold'>FriendAI</h1>
        </div>
        <div className='flex items-center gap-x-6 ml-auto'>
            <h3 className='text-sm xl:text-lg text-gray-600'>
                By Nicholas
            </h3>
            <button className='bg-violet-400 hover:bg-violet-500 text-sm xl:text-[16px] rounded-xl xl:px-4 px-2 py-1'>
                See Other Projects
            </button>
            
        </div>
    </div>
  )
}

export default Header