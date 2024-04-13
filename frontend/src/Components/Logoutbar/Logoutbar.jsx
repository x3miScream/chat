import React from 'react';
import { CiLogout } from "react-icons/ci";
import useLogout from '../../hooks/useLogout.js';

const Logoutbar = () => {
    const {loading, logout} = useLogout();

    return(
        <div className='mt-auto'>
            {
                !loading ? (
                    <CiLogout className='w-6 h-6 text-white cursor-pointer'
                        onClick={logout}
                    ></CiLogout>
                ) : (
                    <span className='loading loading-spinner'></span>
                )
            }
        </div>
    )
};

export default Logoutbar;






// Starter Code for Logout
// import React from 'react';
// import { CiLogout } from "react-icons/ci";

// const Logoutbar = () => {
//     return(
//         <div className='mt-auto'>
//             <CiLogout className='w-6 h-6 text-white cursor-pointer'></CiLogout>
//         </div>
//     )
// };

// export default Logoutbar;