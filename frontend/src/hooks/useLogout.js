import {useState} from 'react';
import {toast} from 'react-hot-toast';
import {useAuthContext} from '../Context/AuthContext.jsx';

const useLogout = () => {
    const [loading, setLoading] = useState(false); 

    const {setAuthUser} = useAuthContext();

    const logout =  async () => {
        try{
            setLoading(true);
    
            const res = await fetch(
                'http://localhost:8000/api/auth/logout',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                    mode: 'cors',
                }
            )
    
            const data = await res.json();
    
            if(res.status === 200){
                toast.success('Logged out successfully');
            }
    
            if(data.errors){
                throw new Error(data.error);
            }
    
            console.log(res);
    
            //localstorage
            localStorage.removeItem('chat-user');
    
            //context
            setAuthUser(null);
    
            console.log(data);
        }
        catch(error){
            toast.error(error.messages);
            console.log(error.messages);
        }
        finally{
            setLoading(false);
        }
    };

    return {loading, logout};
};

export default useLogout;