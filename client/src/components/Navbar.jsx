import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    const loggedIn = true;
    return (
        <div className='flex flex-col'>
            <div className='flex gap-4 bg-blue-900 h-12 items-center pl-9 text-white'>
                <div>
                    <Link to={'/'}>Home</Link>
                </div>
                {!loggedIn &&
                    <>
                        <div>
                            <Link to={'/register'}> Register</Link>
                        </div>
                        <div>
                            <Link to={'/login'}>Login</Link>
                        </div>
                    </>
                }
                <div>
                    <Link to={'/information'} >Information</Link>
                </div>
                <div>
                    <Link to={'/authorised'}> Authorised</Link>
                </div>
                {loggedIn &&
                    <>
                        <div>
                            <Link to={'/logout'} > Logout</Link>
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