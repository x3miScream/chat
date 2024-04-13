import React, {useState} from 'react';

const useHTTPRequest = () => {
    const [loadingState, setLoadingState] = useState(false);

    const sendRequest = async({url, type, data}) => {
        let httpStatus;
        let httpRequestData;

        try{
            setLoadingState(true);
            const res = await fetch(
                url,
                {
                    method: type,
                    headers: {'Content-Type': "application/json"},
                    credentials: 'include',
                    mode: 'cors',
                    body: JSON.stringify(data)
                }
            );

            const data = await res.json();

            httpStatus = res.status;
            httpRequestData = data;

            console.log(res);
            console.log(data);
        }
        catch(error){
            httpStatus = 500;
        }
        finally{
            setLoadingState(false);
        }
    };

    return {loadingState, sendRequest};
};

export default useHTTPRequest;