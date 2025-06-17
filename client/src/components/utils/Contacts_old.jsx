import React from 'react'
import {Link} from 'react-router-dom'
import { Github, Facebook, Mail } from 'lucide-react';

const Contacts = () => {
  const contacts = [
    { icon: Github, link: 'https://github.com/PongsatornR-11' },
    { icon: Facebook, link: 'https://www.facebook.com/bas.pongsatorn/' },
    { icon: Mail, link: 'mailto:pongsatorn.rk@gmail.com' },
  ]
  return (

    <div className="flex items-center
fixed bottom-[108px] -left-[90px] z-50 rotate-90
max-md:hidden font-mono">
      {
        contacts.map((contact, index) => {
          return (
            <Link to={contact.link}>
            <contact.icon key={index} className="text-accent -rotate-90 text-md hover:-translate-x-1
            hover:text-secondary transition-all text-sm duration-300 mr-6 tracking-widest" />
            </Link>
          )
        })
      }

      <div className='h-px w-24 bg-accent'></div>
    </div>
  )
}

export default Contacts