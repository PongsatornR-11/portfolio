import React from 'react'
import FadeIn from '../style/FadeIn'

const MailtoFix = ({ email }) => {
  return (
    <FadeIn
      delay={3700}
      className='fixed bottom-0 -right-10 z-50 flex flex-col items-center text-accent max-md:hidden'
    >
      <a
        href={`mailto:${email}`}
        className="text-accent text-sm -translate-y-20 text-md rotate-90
          hover:-translate-y-22 hover:text-secondary transition-all duration-300"
      >{email}
      </a>
      <div className='w-px h-28 bg-accent'></div>
    </FadeIn>
  )
}

export default MailtoFix