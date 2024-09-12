import React from 'react'
// import icon from "../assets/friend.webp"
import icon from "../assets/climate_person.png"

const Message = ( {text }) => {
  return (
    <div className='ml-auto  justify-end flex flex-col'>
        <div className='flex flex-row gap-x-3 items-center ml-auto'>
            <p className='text-gray-700'>You</p>
            <img src={icon} alt="friends Icon" className='w-9 h-9 rounded-full border'/>
        </div>
        <div className='mt-2 bg-gray-300 rounded-lg px-3 py-1 text-wrap text-ellipsis whitespace-normal break-words'>
            <p className='text-wrap text-ellipsis whitespace-normal break-words'>{text}</p>
        </div>
    </div>
  )
}

export default Message