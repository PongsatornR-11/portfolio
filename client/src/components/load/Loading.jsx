import React, { useState, useEffect } from 'react'
import { LoaderSpin, LoaderTyping, LoaderBLetter } from '../utils/Loader'

const Loading = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500)
        return () => clearTimeout(timer)
    }, [])
    return (
        loading
            ?
            <div className='h-screen bg-primary flex items-center justify-center'>
                <LoaderBLetter />
            </div>
            :
            < div >
                {children}
            </div >
    )

}

export default Loading