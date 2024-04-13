import React, {useEffect, useRef} from 'react';
import Message from './Message.jsx';
import useGetMessages from '../../hooks/useGetMessages.js';
import MessageSkeleton from '../Skeletons/MessageSkeleton.jsx';
import useListenMessages from '../../hooks/useListenMessages.js';

const Messages = () => {
    const {messages, loadingState} = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
            lastMessageRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages]);

    return(
        <div className='px-4 flex-1 overflow-auto'>
            {loadingState ? 
                [...Array(1)].map((_, index) => {return <MessageSkeleton key={index}></MessageSkeleton>})
            :
            null}

            {(!loadingState && messages.length === 0) ? 
                <p className='text-center'>Send a message to start the conversation</p>
            :
            null}

            {messages.map((item, index) => {
                return <div key={item._id} ref={lastMessageRef}>
                        <Message message={item}></Message>
                    </div>
            })}
        </div>
    )
};

export default Messages;





// Starter code for messages component
// import React from 'react';
// import Message from '../Message/Message.jsx';

// const Messages = () => {
//     return(
//         <div className='px-4 flex-1 overflow-auto'>
//             <Message></Message>
//             <Message></Message>
//             <Message></Message>
//             <Message></Message>
//             <Message></Message>
//             <Message></Message>
//             <Message></Message>
//             <Message></Message>
//             <Message></Message>
//             <Message></Message>
//         </div>
//     )
// };

// export default Messages;