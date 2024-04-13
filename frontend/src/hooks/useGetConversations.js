import React, {useState, useEffect} from 'react';
import {toast} from 'react-hot-toast';

const useGetConversations = () => {
    const [loadingState, setLoadingState] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            try{
                setLoadingState(true);

                const res = await fetch(
                    'http://localhost:8000/api/user/getAllUsersForSidebar',
                    {
                        method: 'GET',
                        headers: {'Content-Type': "application/json"},
                        credentials: 'include',
                        mode: 'cors'
                    }
                )

                const data = await res.json();

                if(data.error){
                    throw new Error(data.error);
                }

                setConversations(data);
            }
            catch(error){
                console.log(error);
                toast.error(error.message);
            }
            finally{
                setLoadingState(false);
            }
        };

        getConversations();
    }, []);

    return {loadingState, conversations};
};

export default useGetConversations;