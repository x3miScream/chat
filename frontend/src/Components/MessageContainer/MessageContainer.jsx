import React, {useEffect} from 'react';
import ChatContainer from './ChatContainer.jsx';
import NoChatContainer from './NoChatContainer.jsx';
import useConversation from '../../zustand/useConversation.js';

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const noChatSelected = !selectedConversation;

    useEffect(() => {
        //cleanup function (unmount)
        return () => setSelectedConversation(null)
    }, [setSelectedConversation]);

    return(
        <div className='md:min-w-[450px] flex flex-col'>
            {noChatSelected ?  <NoChatContainer></NoChatContainer> : 
                <ChatContainer></ChatContainer>
            }
        </div>
    )
};

export default MessageContainer;