import React, { useState } from 'react'
import { useAuth } from '../GlobalContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register() {
    const { setToken, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '', password: '', name: ''
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post('/api/register', { ...user });
        navigate('/login');
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" onChange={handleChange} name='name' placeholder='name' />
                <input type="text" onChange={handleChange} name='email' placeholder='email' />
                <input type="text" onChange={handleChange} name='password' placeholder='password' />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}
export default Register