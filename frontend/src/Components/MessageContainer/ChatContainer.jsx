import React, {useEffect} from 'react';
import Messages from './Messages.jsx';
import MessageInput from './MessageInput.jsx';
import useConversation from '../../zustand/useConversation.js';

const ChatContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    return(
        <>
            {/* Header */}
            <div className='bg-slate-500 px-4 py-2 mb-2'>
                <span className='label-text'>To:</span>{" "}
                <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
            </div>

            <Messages></Messages>
            <MessageInput></MessageInput>
        </>
    )
};

export default ChatContainer;