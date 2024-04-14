import React, {useEffect} from 'react';
import { useSocketContext } from '../Context/SocketContext';
import useConversation from '../zustand/useConversation';
import meowNotificationSound from '../assets/sounds/meowNotificationSound.mp3';

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(() => {
        socket?.on('newMessageEvent', (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(meowNotificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        });

        return () => socket.off('newMessageEvent');
    }, [socket, setMessages, messages]);
}

export default useListenMessages;