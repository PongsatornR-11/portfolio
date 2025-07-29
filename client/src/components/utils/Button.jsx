import React from 'react'

const Button = ({ children, className, onClick }) => {
  return (
    <button className={`${className} cursor-pointer border-secondary text-secondary
    transition duration-300 ease-in-out 
    hover:-translate-1 
    hover:shadow-[4px_4px_1px_var(--color-secondary)]
    `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button