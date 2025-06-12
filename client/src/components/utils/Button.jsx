import React from 'react'

const Button = ({ children }) => {
  return (
    <button className='border cursor-pointer rounded-sm py-2 px-4 border-secondary text-secondary
    transition duration-300 ease-in-out 
    hover:-translate-1 
    hover:shadow-[4px_4px_1px_rgba(100,255,218,1)]
    '
      asChild
    >
      {children}
    </button>
  )
}

export default Button