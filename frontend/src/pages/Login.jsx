import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useLogin from '../hooks/useLogin';


const Login = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const {loadingState, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(inputs);
    };

    return(
        <div className='flex flex-column items-center justify-center minw-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'> ChatCat</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' 
                        value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})} />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'  
                        value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
                    </div>

                    <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;



// Starter Code for Login page
// import React from 'react';

// const Login = () => {
//     return(
//         <div className='flex flex-column items-center justify-center minw-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Login
//                     <span className='text-blue-500'> ChatCat</span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Username</span>
//                         </label>
//                         <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
//                     </div>

//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Password</span>
//                         </label>
//                         <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
//                     </div>

//                     <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                         {"Don't"} have an account?
//                     </a>

//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// };

// export default Login;