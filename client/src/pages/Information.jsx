import React, { useEffect, useState } from 'react'
import { useAuth } from '../GlobalContext';
import axios from 'axios';

function Information() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(true);
    const { token } = useAuth();
    useEffect(() => {
        async function getUserInfo() {
            console.log("The token is ", token);

            const user = await axios.get('/api/user_info', {
                headers: {
                    Authorization: token // Make sure token is correctly formatted
                }
            });
           
            setLoading(false);
            setUser(user);
        }
        getUserInfo();
    }, [token])
    return (
        <>
            {loading ? <>Loading ...</> : <div>
                The User Email is {user.data.email}

            </div>}

        </>
    )
}

export default Information