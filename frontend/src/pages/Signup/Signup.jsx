import React, {useState} from 'react';
import GenderCheckbox from './GenderCheckbox.jsx';
import {Link} from 'react-router-dom';
import {singUp} from '../../hooks/useSignup.js';
import useSignup from '../../hooks/useSignup.js';

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender: gender});
    };

    const {loadingState, signUp} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
        await signUp(inputs);
    };

    return(
        <div className='flex flex-column items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'> ChatCat</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Hans Gunsche' className='w-full input input-bordered h-10' 
                        value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' 
                        value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' 
                        value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10' 
                        value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}></GenderCheckbox>

                    <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Alread have an account?</Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Signup;











// Starter Code for signup page
// import React from 'react';
// import GenderCheckbox from './GenderCheckbox.jsx';

// const Signup = () => {
//     return(
//         <div className='flex flex-column items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Sign Up
//                     <span className='text-blue-500'> ChatCat</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Full Name</span>
//                         </label>
//                         <input type="text" placeholder='Hans Gunsche' className='w-full input input-bordered h-10' />
//                     </div>

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
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Confirm Password</span>
//                         </label>
//                         <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10' />
//                     </div>

//                     <GenderCheckbox></GenderCheckbox>

//                     <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Alread have an account?</a>

//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// };

// export default Signup;