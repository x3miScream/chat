import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar.jsx';
import MessageContainer from '../Components/MessageContainer/MessageContainer.jsx';

const Home = () => {
    const noChatSelected = false;

    return(
        <div className='flex sm:h-[450px] md:h-[100%] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar></Sidebar>
            <MessageContainer></MessageContainer>
        </div>
    )
};

export default Home;