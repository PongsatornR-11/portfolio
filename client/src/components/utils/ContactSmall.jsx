import React from 'react'
import { Github, Facebook, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSmall = () => {
    const contacts = [
        { icon: Github, link: 'https://github.com/PongsatornR-11' },
        { icon: Facebook, link: 'https://www.facebook.com/bas.pongsatorn/' },
        { icon: Instagram, link: 'https://www.instagram.com/bass_sssssy/' },
        { icon: Mail, link: 'mailto:pongsatorn.rk@gmail.com' },
    ]
    return (
        <div className='md:hidden w-full flex items-center justify-center bg-primary text-accent gap-x-5 pb-24'>
            {contacts.map((contact, index) => {
                return (
                    <Link key={index} to={contact.link} className='hover:-translate-y-1 hover:text-secondary transition-all duration-300'>
                        <contact.icon />
                    </Link>
                )
            })}
        </div>
    )
}

export default ContactSmall