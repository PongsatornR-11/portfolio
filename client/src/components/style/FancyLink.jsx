import React from 'react';

const FancyLink = ({ children, className }) => {
  return (
    <span
      className="group relative inline-block px-1 text-accent transition-colors duration-300"
    >
      <span className={`${className} relative z-10 group-hover:text-neutral transition-colors duration-300`}>
        {children}
      </span>
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary transition-all duration-300 group-hover:h-full z-0"></span>
    </span>
  );
};

export default FancyLink;
