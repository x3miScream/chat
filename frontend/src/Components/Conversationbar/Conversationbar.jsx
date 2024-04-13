import React from 'react';
import Conversation from '../Conversation/Conversation.jsx';
import useGetConversations from '../../hooks/useGetConversations.js';
import { getRandomEmoji } from '../../utils/emojis.js';

const Conversations = () => {
    const {loadingState, conversations} = useGetConversations();

    return(
        <div className='py-2 flex flex-col overflow-auto'>
            {
                conversations.map((item, index) => {
                    return <Conversation key={item._id}
                    conversation = {item}
                    emoji = {getRandomEmoji()} 
                    lastIndex = {index === (conversations.length - 1)}
                    ></Conversation>        
                })
            }

            {
                loadingState ? <span className='loading loading-spinner mx-auto'></span>
                : null
            }
        </div>
    )
};

export default Conversations;




// Starter code for conversations component
// import React from 'react';
// import Conversation from '../Conversation/Conversation.jsx';

// const Conversations = () => {
//     return(
//         <div className='py-2 flex flex-col overflow-auto'>
//             <Conversation></Conversation>
//             <Conversation></Conversation>
//             <Conversation></Conversation>
//             <Conversation></Conversation>
//             <Conversation></Conversation>
//             <Conversation></Conversation>
//         </div>
//     )
// };

// export default Conversations;