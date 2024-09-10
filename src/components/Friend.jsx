import React from 'react'
import icon from "../assets/friend.webp"

const Friend = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-3'>
        <div className=''>
            <img src={icon} alt="Friends Picture" className='w-20 h-20 border rounded-full' />
        </div>
        <div className='mt-2 flex flex-col justify-center items-center'>
            <h2 className=''>Friend</h2>
        </div>
    </div>
  )
}

export default Friend