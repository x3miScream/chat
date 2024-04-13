import React, {useEffect} from 'react';
import { useSocketContext } from '../Context/SocketContext';
import useConversation from '../zustand/useConversation';

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(() => {
        socket?.on('newMessageEvent', (newMessage) => {
            newMessage.shouldShake = true;
            setMessages([...messages, newMessage]);
        });

        return () => socket.off('newMessageEvent');
    }, [socket, setMessages, messages]);
}

export default useListenMessages;