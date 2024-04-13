import React from 'react';
import {TiMessages} from 'react-icons/ti'
import {useAuthContext} from '../../Context/AuthContext.jsx';

const NoChatContainer = () => {
    const {authUser} = useAuthContext();

    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 😺 {authUser.fullName}</p>
                <p>Select a chat to start meowing</p>
                <TiMessages className='text-3xl md:text-6xl text-center'></TiMessages>
            </div>
        </div>
    )
};

export default NoChatContainer;