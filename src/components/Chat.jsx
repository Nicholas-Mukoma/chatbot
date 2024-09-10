import { useState, useRef, useEffect } from "react"
import OutPut from "./OutPut"
import Message from "./Message.jsx"
import Input from "./Input"

const Chat = () => {

  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null)

  const handleSendMessage = (userMessage) => {
    // call api
    const newMessages = [
      ...messages,
      { type: 'Outgoing', text: userMessage},
      { type: 'Incomming', text: "Hello I am your good friendHello I am your good friend Tell me something about yourself Hello I am your good friend Tell me something about yourself Hello I am your good friend Tell me something about yourself Hello I am your good friend Tell me something about yourself Hello I am your good friend Tell me something about yourself Hello I am your good friend Tell me something about yourself "}
    ];

    setMessages(newMessages)
    
  }

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView()
    }
  }, [messages])

  return (
    <div className='flex flex-col items-center justify-center mt-9 px-9  md:mt-9  sm:px-10 md:px-20 lg:px-40 xl:px-60'>
      <OutPut text="Hello I am your good friend Tell me something about yourself" speed={12}/>
      {messages.map((message, index) => message.type === 'Outgoing' ? (
        <Message key={index} text={message.text}/>
      ) : (
        <OutPut key={index} text={message.text} speed={9}/>
      ))}
      <div ref={messageEndRef} className="h-24"></div>
      <Input onSendMessage={handleSendMessage}/>
      
    </div>
  )
}

export default Chat