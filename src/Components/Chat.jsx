import { useEffect, useRef, useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { useFetchProjectQuery } from "../Features/projectApi";
import { useFetchMessagesQuery } from "../Features/chatApi";

const Chat = () => {
  const [newmessage, setNewMessage] = useState("");
  const [messages, setmessages] = useState([]);
  const { targetUserId } = useParams();
  const myuser = useSelector((store) => store?.auth?.user);
  const { firstName, lastName, photoUrl } = myuser;
  const userId = myuser._id;

  const { data, isLoading } = useFetchMessagesQuery(targetUserId);
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
  

  return (
    <div className="flex mt-10  h-[70vh] md:mx-auto border border-gray-500 flex-col max-w-5xl">
      <h1 className="border border-gray-500 text-xl font-bold px-2 text-center">Hello</h1>

      <div ref={chatContainerRef} className=" flex-1 overflow-scroll p-2">
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
                <img
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
      </div>
      <div className="border-t border-gray-500 text-xl flex items-center p-4 gap-2">
        <input
          value={newmessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-blue-600 p-2"
        ></input>
        <button onClick={handleSend} className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
};
export default Chat;
