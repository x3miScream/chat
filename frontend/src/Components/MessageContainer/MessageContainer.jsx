import React from 'react';
import ChatContainer from './ChatContainer.jsx';
import NoChatContainer from './NoChatContainer.jsx';

const MessageContainer = () => {
    const noChatSelected = false;

    return(
        <div className='md:min-w-[450px] flex flex-col'>
            {noChatSelected ?  <NoChatContainer></NoChatContainer> : 
                <ChatContainer></ChatContainer>
            }
        </div>
    )
};

export default MessageContainer;