import React from 'react';
import Searchbar from '../Searchbar/Searchbar.jsx';
import Conversationbar from '../Conversationbar/Conversationbar.jsx';
import Logoutbar from '../Logoutbar/Logoutbar.jsx';

const Sidebar = () => {
    return(
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <Searchbar></Searchbar>
            <div className='divider px-3'></div>
            <Conversationbar></Conversationbar>
            <div className='divider px-3'></div>
            <Logoutbar></Logoutbar>
        </div>
    )
};

export default Sidebar;







// Starter code for Sidebar component
// import React from 'react';
// import Searchbar from '../Searchbar/Searchbar.jsx';
// import Conversationbar from '../Conversationbar/Conversationbar.jsx';
// import Logoutbar from '../Logoutbar/Logoutbar.jsx';

// const Sidebar = () => {
//     return(
//         <div className='border-r border-slate-500 p-4 flex flex-col'>
//             <Searchbar></Searchbar>
//             <div className='divider px-3'></div>
//             <Conversationbar></Conversationbar>
//             <div className='divider px-3'></div>
//             <Logoutbar></Logoutbar>
//         </div>
//     )
// };

// export default Sidebar;