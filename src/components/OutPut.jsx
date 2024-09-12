import { useEffect, useState, useRef } from 'react'
// import icon from "../assets/friend.webp"
import icon from "../assets/images.jpeg"

const OutPut = ({text, speed}) => {
    
    const [displayText, setDisplayText] = useState('')
    const [index, setIndex] = useState(0)

    const textEndRef = useRef(null)

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text.charAt(index))
                setIndex((prevIndex) => prevIndex + 1)
            }, speed)
            return () => clearTimeout(timeout)
        }
    }, [index, text, speed])


    useEffect(() => {
        if (textEndRef.current) {
          textEndRef.current.scrollIntoView()
        }
      }, [displayText])

    return (
    <div className='mr-auto '>
        <div className='flex flex-row gap-x-3 items-center'>
            <img src={icon} alt="friends Icon" className='w-9 h-9 rounded-full border object-cover'/>
            <p className='text-gray-700'>ClimateAI</p>
        </div>
        <div className='mt-2  rounded-lg px-3 py-1 text-wrap text-ellipsis whitespace-normal break-words w-[70vw] min-w-[70vw]'>
        <div ref={textEndRef} className=""></div>
            <p className='text-wrap text-ellipsis whitespace-normal break-words w-[60vw] min-w-[60vw]'>{displayText}</p>
        </div>
    </div>
  )
}

export default OutPut