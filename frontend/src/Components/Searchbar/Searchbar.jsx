import React, {useState} from 'react';
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';


const Searchbar = () => {
    const [search, setSearch] = useState('');

    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!search) return;

        if(search.length < 3)
        {
            return toast.error('Search term must be at least 3 characters long');
        }

        const conversation = conversations.find((item) => {return item.fullName.toLowerCase().includes(search.toLowerCase())});

        if(conversation)
        {
            setSelectedConversation(conversation);
            setSearch('');
        }else{
            toast.error('No such user found');
        }
    };

    return(
        <div>
            <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                <input type="text" placeholder='Search...' className='input input-bordered rounded-full' name="" id=""
                value={search}
                onChange={(e) => {return setSearch(e.target.value)}} />
                <button className="btn btn-circle bg-sky-500 text-white">
                    <IoSearchSharp className='w-6 h-6 outline-none'></IoSearchSharp>
                </button>
            </form>
        </div>
    )
};

export default Searchbar;