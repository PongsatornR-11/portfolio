import React from 'react'

const ImageHover = ({ src, className, rounded = 'lg' }) => {

    return (
            <div className={`${className} relative rounded-${rounded}`}>
                <div className={`absolute inset-0 rounded-${rounded} bg-secondary opacity-20 hover:opacity-0 duration-200 transition-opacity`}></div>
                <img src={src} className={`object-cover rounded-${rounded}`} />
            </div>
    )
}

export default ImageHover