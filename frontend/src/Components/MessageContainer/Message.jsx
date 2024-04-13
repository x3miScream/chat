import React from 'react';
import {useAuthContext} from '../../Context/AuthContext.jsx';
import useConversation from '../../zustand/useConversation';
import extractTime from '../../utils/extractTime.js';

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();

    const fromMe = message.senderId === authUser._id;

    const chatBubbleAlignmentClass = fromMe ? 'chat-end' : 'chat-start';
    const chatBubbleProfilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const chatBubbleBackgroundColor = fromMe ? 'bg-blue-500' : '';
    const chatBubbleFormattedTime = extractTime(message.createdAt);

    return(
        <div className={`chat ${chatBubbleAlignmentClass}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={chatBubbleProfilePic} alt="User Avatar" />
                </div>
            </div>
            <div className={`chat-bubble text-white pb-2 ${chatBubbleBackgroundColor}`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{chatBubbleFormattedTime}</div>
        </div>
    )
};

export default Message;



// Starter code for message component
// import React from 'react';

// const Message = () => {
//     return(
//         <div className='chat chat-end'>
//             <div className='chat-image avatar'>
//                 <div className='w-10 rounded-full'>
//                     <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Avatar" />
//                 </div>
//             </div>
//             <div className={'chat-bubble text-white bg-blue-500'}>Hi! What is up?</div>
//             <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>14:42</div>
//         </div>
//     )
// };

// export default Message;