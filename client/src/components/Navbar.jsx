import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../GlobalContext'

function Navbar() {
    const { token, isAuthenticated, setToken, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();
    const logout = (e) => {
        setToken(false);
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('token');
        navigate('/');
    }
    return (
        <div className='flex flex-col'>
            <div className='flex gap-4 bg-blue-900 h-12 items-center pl-9 text-white'>
                <div>
                    <Link to={'/'}>Home</Link>
                </div>
                {!isAuthenticated &&
                    <>
                        <div>
                            <Link to={'/register'}> Register</Link>
                        </div>
                        <div>
                            <Link to={'/login'}>Login</Link>
                        </div>
                    </>
                }
                {isAuthenticated &&
                    <>
                        <div>
                            <Link to={'/information'} >Information</Link>
                        </div>
                        <div>
                            <Link to={'/authorised'}> Authorised</Link>
                        </div>
                    </>}
                {isAuthenticated &&
                    <>
                        <div>
                            <button onClick={logout} >Logout</button>
                        </div>
                    </>}
            </div>
            <div className=' flex-1'>
                <Outlet />
            </div>
        </div>
    )
}

export default Navbar