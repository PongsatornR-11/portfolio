import React, { useEffect, useState } from 'react'

const FadeIn = ({ children, delay = 0, duration = 500, className, onFadeInComplete }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)

            if (onFadeInComplete) {
                setTimeout(() => {
                    onFadeInComplete();
                }, duration)
            }
        }, delay)
        return () => clearTimeout(timer)
    }, [delay, duration, onFadeInComplete])

    return (
        <div
            style={{
                transition: `all ${duration}ms ease-out`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-1rem)'
            }}
            className={`${className}`}
        >
            {children}
        </div>
    )
}

export default FadeIn