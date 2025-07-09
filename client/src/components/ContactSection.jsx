import React from 'react'
import Button from './utils/Button'
import { Send } from 'lucide-react'

const ContactSection = () => {
    return (
        <section className='max-w-2xl mx-auto flex justify-center items-center h-[70vh] px-4'>
            <div className='text-center'>
                <p className='font-mono text-secondary'>05. What's Next</p>
                <div className='flex items-center justify-center space-x-2 mt-2 mb-4'>
                    <a href="mailto:pongsatorn.rk@gmail.com" className='flex'>
                        <p className='text-accent text-5xl font-bold'>Get In Touch</p>
                        <Send className='text-accent transition-transform hover:-translate-y-1 hover:translate-x-1' />
                    </a>
                </div>
                <p className='text-accent text-2xl mt-4'>
                    I'm excited to leverage my skills in modern web technologies to help build your next project. Feel free to reach out!
                </p>

                <a href="mailto:pongsatorn.rk@gmail.com">
                    <Button className={'font-mono border px-5 py-3 rounded-md my-14'}>Say Hello</Button>
                </a>
            </div>
        </section>
    )
}

export default ContactSection