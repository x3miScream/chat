import React, {useEffect} from 'react';
import { useSocketContext } from '../Context/SocketContext';
import useConversation from '../zustand/useConversation';
import meowNotificationSound from '../assets/sounds/meowNotificationSound.mp3';

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages, selectedConversation} = useConversation();

    useEffect(() => {
        socket?.on('newMessageEvent', (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(meowNotificationSound);
            sound.play();

            if(selectedConversation._id === newMessage.senderId)
            {
                setMessages([...messages, newMessage]);
            }
            //else
            
        });

        return () => socket.off('newMessageEvent');
    }, [socket, setMessages, messages]);
}

export default useListenMessages;