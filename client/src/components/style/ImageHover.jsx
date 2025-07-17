import React from 'react';

const ImageHover = ({ src, alt = "", className }) => {
    return (
        <div className={`group relative overflow-hidden ${className}`}>
            <img 
                src={src} 
                alt={alt}
                className='w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-secondary opacity-50 transition-opacity duration-300 group-hover:opacity-0'></div>
        </div>
    );
};

export default ImageHover;
