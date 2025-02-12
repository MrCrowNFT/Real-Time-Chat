import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    //connect new socket to server
    const newSocket = io("http://localhost:5500", { autoConnect: false });
    newSocket.connect();
    setSocket(newSocket);

    //cleanup after unmount
    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    //only work if there is a socket
    if (!socket) return;

    //listen for message events
    socket.on("message", (msg: string) =>
      setMessages((prev) => [...prev, msg])
    );
    return () => socket.off("message");
  }, [socket]);

  //the server will recieve this
  const sendMessage = (msg: string) => {
    if (socket) {
      socket.emit("message", msg);
    }
  };
  return { messages, sendMessage };
};
