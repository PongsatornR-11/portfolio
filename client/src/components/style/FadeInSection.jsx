import React, { useEffect, useState, useRef } from 'react'

const FadeInSection = ({ children, delay = 300, duration = 1000 }) => {

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(ref.current)

                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [])
    return (
        <div
            ref={ref}
            className={`transition-all delay-${delay} duration-${duration} ease-out 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
        >
            {children}
        </div>
    )
}

export default FadeInSection