import { useState } from 'react';
import { useSocket } from '../useSocket.ts';

const Chat = () => {
  const { messages, sendMessage } = useSocket();
  const [input, setInput] = useState('');

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="border p-2 h-64 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className="p-1 border-b">{msg}</div>
        ))}
      </div>
      <input
        className="border p-2 w-full mt-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage(input) && setInput('')}
      />
    </div>
  );
};

export default Chat;