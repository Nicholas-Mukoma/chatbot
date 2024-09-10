import React, { useState, useRef, useEffect } from 'react'
import { RiSendPlaneFill } from "react-icons/ri";


const Input = ( { onSendMessage} ) => {

  const [userInput, setUserInput] = useState("")

  const textareaRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      onSendMessage(userInput);
      setUserInput('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftkey) {
      e.preventDefault(); // prevent new line insertions
      handleSubmit(e)
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [])

  return (
    <div className='fixed mt-3 bottom-2'>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="" className='flex items-center relative'>
                <textarea 
                    type="text"
                    placeholder='Lets talk'
                    value={userInput}
                    ref={textareaRef}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows="1"
                    className='bg-gray-300 placeholder:text-gray-700 w-[80vw] m xl:w-[40vw] min-w-[40vw] border-none outline-none rounded-full  py-2 px-3 text-wrap text-ellipsis whitespace-normal break-words h-auto resize-none'
                 />
                 <button type="submit"  className='absolute right-0.5 bg-violet-800 hover:opacity-55 p-2 rounded-full'>
                    <RiSendPlaneFill size={16} fill='#ffffff'/>
                 </button>
            </label>
        </form>
    </div>
  )
}

export default Input

