import React from 'react'

const Button = ({ children }) => {
  return (
    <button className='border rounded-sm p-2 border-[#64ffda] text-[#64ffda] 
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