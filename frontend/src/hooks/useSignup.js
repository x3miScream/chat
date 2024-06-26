import React, {useState} from 'react';
import {toast} from 'react-hot-toast';
import {useAuthContext} from '../Context/AuthContext.jsx';

const useSignup = () => {
    const [loadingState, setLoadingState] = useState(false);

    const {authUser, setAuthUser} = useAuthContext();

    const signUp = async({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender});

        if(!success) return;

        setLoadingState(true);

        try{
            const res = await fetch(
                `${process.env.REACT_APP_SERVER_HOST_URL}/api/auth/signup`,
                {
                    method: 'POST',
                    headers: {'Content-Type': "application/json"},
                    credentials: 'include',
                    mode: 'cors',
                    body: JSON.stringify({fullName, username, password, confirmPassword, gender})
                }
            );

            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }

            //localstorage
            localStorage.setItem('chat-user', JSON.stringify(data));

            //context
            setAuthUser(data);

            console.log(data);
        }
        catch(error){
            toast.error(error.message);
        }
        finally{
            setLoadingState(false);
        }
    };

    return {loadingState, signUp};
};

export default useSignup;

const handleInputErrors = ({fullName, username, password, confirmPassword, gender}) => {
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill in all fields.");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Passwords do not match.");
        return false;
    }

    if(password.length < 6){
        toast.error("Passwords must be at least 6 characters.");
        return false;
    }

    return true;
}