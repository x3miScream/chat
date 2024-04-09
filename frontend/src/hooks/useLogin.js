import React, {useState} from 'react';
import {toast} from 'react-hot-toast';

const useLogin = () => {
    const [loadingState, setLoadingState] = useState(false);

    const login = async({username, password}) => {
        const success = handleInputErrors({username, password});

        if(!success) return;

        setLoadingState(true);

        try{
            const res = await fetch(
                'http://localhost:8000/api/auth/login',
                {
                    method: 'POST',
                    headers: {'Content-Type': "application/json"},
                    credentials: 'include',
                    mode: 'cors',
                    body: JSON.stringify({username, password})
                }
            );

            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }
            console.log(res);
            console.log(data);

            //localstorage

            //context

            console.log(data);
        }
        catch(error){
            toast.error(error.message);
        }
        finally{
            setLoadingState(false);
        }
    };

    return {loadingState, login};
};

export default useLogin;

const handleInputErrors = ({username, password}) => {
    if(!username || !password){
        toast.error("Please fill in all fields.");
        return false;
    }

    return true;
}