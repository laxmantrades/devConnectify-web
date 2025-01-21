import { useEffect, useRef, useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { useFetchMessagesQuery } from "../Features/chatApi";
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Chat = () => {
  const [newmessage, setNewMessage] = useState("");
  const [messages, setmessages] = useState([]);
  const { targetUserId } = useParams();
  const myuser = useSelector((store) => store?.auth?.user);
  const { firstName, lastName, photoUrl } = myuser;
  const userId = myuser._id;

  const { data,isError, isLoading } = useFetchMessagesQuery(targetUserId);
  
  
  useEffect(() => {
    const socket = createSocketConnection();
    socket.emit("joinChat", { userId, targetUserId });
    socket.on("messageReceived", ({ firstName, lastName, photoUrl, text }) => {
      setmessages((messages) => [
        ...messages,
        { firstName, text, lastName, photoUrl },
      ]);
    });

    //when the compnent unmounts
    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);
  const chatContainerRef = useRef(null);
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [data, messages]);
  useEffect(() => {
    if (data?.chat?.messages) {
      const transformedMessages = data.chat.messages.map((msg) => {
        const { senderId, text } = msg;
        return {
          firstName: senderId.firstName,
          lastName: senderId.lastName,
          photoUrl: senderId.photoUrl,
          text,
        };
      });

      // Update state with the transformed messages
      setmessages(transformedMessages);
    }
  }, [data]);

  const handleSend = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName,
      lastName,
      photoUrl,
      userId,
      targetUserId,
      text: newmessage,
    });
    setNewMessage("");
  };
  const user=data&&data?.chat?.participants?.filter((participant)=>{
    return participant._id===targetUserId

    })
    
    
  
    console.log(user);
    
    
  
  
  
  

  return (
    !isError?<div className="flex mt-10 h-[90vh]  md:h-[70vh] md:mx-auto border md:border-gray-500 flex-col max-w-5xl ">
      <div className="border border-gray-500 text-xl font-bold px-2 flex p-2 items-center space-x-3">
        <img src={user&&user[0]?.photoUrl} className="w-10 h-10 rounded-full object-cover object-top"/>
        <h1>{user&&user[0]?.firstName+" "+user[0]?.lastName}</h1>
      </div>

      {!isError&&<div ref={chatContainerRef} className=" flex-1 overflow-scroll p-2">
        {/*chat section*/}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat ${
              message.firstName === firstName ? "chat-start" : "chat-end"
            }`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <LazyLoadImage
                  alt="Tailwind CSS chat bubble component"
                  src={message.photoUrl}
                />
              </div>
            </div>
            <div className="chat-header">
              {message.firstName}
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">{message.text}</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        ))}
        {/*chat section*/}
      </div>}
      {!isError&&<div className="border-t-2 border-gray-500 text-xl flex items-center p-4 gap-2 ">
        <input
          value={newmessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-blue-600 p-2"
        ></input>
        <button onClick={handleSend} className="btn btn-primary">
          Send
        </button>
      </div>}
    </div>:<div className="text-xl text-center">Sorry you are smart but you are not connected</div>
  );
};
export default Chat;
