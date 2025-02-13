import { useState } from "react";
import { useSocket } from "../hooks/useSocket.ts";
import clip from "../assets/clip.svg";
import send from "../assets/send.svg";

const Chat = () => {
  const { messages, sendMessage } = useSocket();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="p-4 flex flex-col items-center max-w-md mx-auto bg-[#F5F5F5] rounded-lg shadow-md">
      {/* Messages Container */}
      <div className="border border-[#6B5B95] h-96 w-full overflow-y-auto bg-white rounded-lg p-2 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className="p-2 my-1 bg-[#F5F5F5] rounded-lg shadow-sm text-[#333333]"
          >
            {msg}
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
        {/* Clip Icon and Input Container */}
        <div className="flex items-center bg-white rounded-full border border-[#6B5B95] p-1 flex-grow">
          <img src={clip} alt="clip-icon" className="w-6 h-6 ml-2" />
          <input
            className="p-2 flex-grow rounded-full outline-none ml-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="bg-[#88B04B] text-white p-3 rounded-full hover:bg-[#769D3F] transition-colors"
        >
          <img src={send} alt="send-button" className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};
export default Chat;
