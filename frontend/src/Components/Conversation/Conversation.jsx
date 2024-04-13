import React from 'react';
import useConversation from '../../zustand/useConversation';
import {useSocketContext} from '../../Context/SocketContext.jsx';

const Conversation = ({conversation, emoji, lastIndex}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    const isSelected = (selectedConversation?._id === conversation._id)
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    return(
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? 'bg-sky-700' : ''}`}
                onClick={() => {setSelectedConversation(conversation)}}
            >
                <div className={`avatar ${isOnline ? 'online' : ''}`}>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profilePic} alt="User Avatar" />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>

            {!lastIndex ? (<div className='divider my-0 py-0 h-1'></div>) : null}
        </>
    )
};

export default Conversation;





//Starter code for conversation component
// import React from 'react';

// const Conversation = () => {
//     return(
//         <>
//             <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//                 <div className="avatar online">
//                     <div className='w-12 rounded-full'>
//                         <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Avatar" />
//                     </div>
//                 </div>

//                 <div className='flex flex-col flex-1'>
//                     <div className='flex gap-3 justify-between'>
//                         <p className='font-bold text-gray-200'>Hans Gunsche</p>
//                         <span className='text-xl'>🐈</span>
//                     </div>
//                 </div>
//             </div>

//             <div className='divider my-0 py-0 h-1'></div>
//         </>
//     )
// };

// export default Conversation;