import React, { useEffect } from 'react'
import instance from './axios';

function Home() {
    
    useEffect(() => {
        instance.get('/users')
        .then((res) => console.log(res.data));

    }, [])

    return (
        <div>
            Home
        
        </div>
    )
}

export default Home
