import { useState } from "react";
import { useSocket } from "../hooks/useSocket.ts";

const Chat = () => {
  const { messages, sendMessage } = useSocket();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="border p-2 h-64 overflow-y-auto bg-gray-100 rounded">
        {messages.map((msg, i) => (
          <div key={i} className="p-1 my-1 bg-white rounded shadow-sm">
            {msg}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex mt-2 gap-2">
        <input
          className="border p-2 flex-grow rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
