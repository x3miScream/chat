import React, {useState, useEffect} from 'react';
import useConversation from '../zustand/useConversation';

const useGetMessages = () => {
    const [loadingState, setLoadingState] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    const getMessages = async () => {
        try{
            setLoadingState(true);
    
            const res = await fetch(
                `http://{selectedConversation._id}`,
                {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                    mode: 'cors'
                }
            )

            const data = await res.json();

            if(data.error){
                throw new (data.error);
            }

            setMessages(data);

            console.log(messages);
        }
        catch(error){
    
        }
        finally{
            setLoadingState(false);
        }
    };

    useEffect(() => { if(selectedConversation?._id) {getMessages()} }, [selectedConversation?._id]);

    return {messages, loadingState};
};

export default useGetMessages;