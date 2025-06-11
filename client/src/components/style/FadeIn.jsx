import React, { useEffect, useState } from 'react'

const FadeIn = ({ children, delay = 0, duration = 500 }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, delay)
        return () => clearTimeout(timer)
    }, [delay])

    return (
        <div 
            style={{
                transition: `all ${duration}ms ease-in-out`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-1rem)'
            }}
        >
            {children}
        </div>
    )
}

export default FadeIn