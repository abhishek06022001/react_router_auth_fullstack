import React, { useState } from 'react'
import { useAuth } from '../GlobalContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
    const { setToken, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '', password: ''
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const submitForm = async (e) => {
        e.preventDefault();
        const newToken = await axios.post('/api/login', { ...user });
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('token', newToken.data.msg);
        setIsAuthenticated(true);
        setToken(newToken.data.msg);
        navigate('/', { replace: true });
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" onChange={handleChange} name='email' placeholder='email' />
                <input type="text" onChange={handleChange} name='password' placeholder='password' />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}
export default Login