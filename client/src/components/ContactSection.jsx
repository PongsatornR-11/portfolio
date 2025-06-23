import React from 'react'
import Button from './utils/Button'

const ContactSection = () => {
    return (
        <section className='max-w-2xl mx-auto flex justify-center items-center h-[70vh] px-4'>
            <div className='text-center'>
                <p className='font-mono text-secondary'>04. What's Next</p>
                <p className='text-accent text-5xl font-bold'>Get In Touch</p>
                <p className='text-accent text-2xl mt-4'>
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                <a href="mailto:pongsatorn.rk@gmail.com">
                    <Button className={'font-mono border px-5 py-3 rounded-md my-14'}>Say Hello</Button>
                </a>
            </div>
        </section>
    )
}

export default ContactSection