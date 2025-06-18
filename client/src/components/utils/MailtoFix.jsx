import React from 'react'

const MailtoFix = ({ email }) => {
  return (
    <div className='h-screen fixed z-50 text-accent max-md:hidden'>
      <div className='fixed bottom-0 -right-10 flex flex-col items-center'>
        <a
          href={`mailto:${email}`}
          className="text-accent text-sm -translate-y-20 text-md rotate-90
          hover:-translate-y-22 hover:text-secondary transition-all duration-300"
        >{email}
        </a>
        <div className='w-px h-28 bg-accent'></div>
      </div>
    </div>
  )
}

export default MailtoFix