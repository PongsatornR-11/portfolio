import React from 'react'

const MailTo = ({ email }) => {
    return (
        <div className="flex items-center
        fixed bottom-[158px] -right-[130px] z-50 rotate-90
        max-md:hidden font-mono">
                <a
                    href={`mailto:${email}`}
                    className="text-accent text-md hover:-translate-x-2
                hover:text-secondary transition-all text-sm duration-300 mr-8 tracking-widest"
                >{email}
                </a>
                <div className='h-px w-24 bg-accent'></div>
        </div>

    )
}

export default MailTo