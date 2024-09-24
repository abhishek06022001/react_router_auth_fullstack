import React, { useState } from 'react'

function GlobalContext() {
    const [token,setToken] = useState(localStorage.getItem('token') || false);
    
    return (
        <div>GlobalContext</div>
    )
}

export default GlobalContext