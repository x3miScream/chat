import React, { useState } from 'react';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useSendMessage = () => {
    const [loadingState, setLoadingState] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    const sendMessage = async (message) => {
        try{
            setLoadingState(true);

            const res = await fetch(
                `http://localhost:8000/api/message/send/${selectedConversation._id}`,
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                    mode: 'cors',
                    body: JSON.stringify({message})
                }
            )

            const data = await res.json();

            if(data.error){
                throw new (data.error);
            }

            setMessages([...messages, data]);

            console.log(messages);
        }
        catch(error){
            console.log(error);
            toast.error(error.message);
        }
        finally{
            setLoadingState(false);
        }
    };

    return {sendMessage, loadingState};
};

export default useSendMessage;