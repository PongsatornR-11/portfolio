import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Facebook, Mail } from 'lucide-react';
import FadeIn from '../style/FadeIn';

const ContactFix = () => {
    const contacts = [
        { icon: Github, link: 'https://github.com/PongsatornR-11' },
        { icon: Facebook, link: 'https://www.facebook.com/bas.pongsatorn/' },
        { icon: Mail, link: 'mailto:pongsatorn.rk@gmail.com' },
    ]
    return (
        <FadeIn
            delay={3300}
            className='fixed bottom-0 left-5 z-50 flex flex-col items-center space-y-4 text-accent max-md:hidden'
        >
            {contacts.map((contact, index) => {
                return (
                    <Link key={index} to={contact.link} className='hover:-translate-y-1 hover:text-secondary transition-all duration-300'>
                        <contact.icon />
                    </Link>
                )
            })}
            <div className='w-px h-28 bg-accent'></div>
        </FadeIn>
    )
}

export default ContactFix