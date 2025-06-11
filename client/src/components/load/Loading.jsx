import React, { useState, useEffect } from 'react'
import { LoaderSpin, LoaderTyping, LoaderBLetter } from '../utils/Loader'

const Loading = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [])
    return (
        loading
            ? <LoaderBLetter />
            :
            < div >
                {children}
            </div >
    )

}

export default Loading