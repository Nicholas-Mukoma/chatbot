import React from 'react'
// import icon from "../assets/friend.webp"
// import icon from "../assets/climate.jpeg"
import icon from "../assets/images.jpeg"
// import icon from "../assets/images (1).jpeg"

const Climate = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-3'>
        <div className=''>
            <img src={icon} alt="Friends Picture" className='w-20 h-20 border rounded-full object-cover' />
        </div>
        <div className='mt-2 flex flex-col justify-center items-center'>
            <h2 className=''>Climate Change</h2>
        </div>
    </div>
  )
}

export default Climate