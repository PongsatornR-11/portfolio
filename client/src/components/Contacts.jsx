import React from 'react'
import { Github, Facebook, Mail } from 'lucide-react';

const Contacts = () => {
  const Icons = [
    Github,
    Facebook,
    Mail,
  ]
  return (

    <div className="flex items-center
fixed bottom-[158px] -left-[90px] z-50 rotate-90
max-md:hidden font-mono">
      {
        Icons.map((Icon, index) => {
          return <Icon key={index} className="text-accent text-md hover:-translate-x-2
          hover:text-secondary transition-all text-sm duration-300 mr-8 tracking-widest" />
        })
      }
      
      <div className='h-px w-24 bg-accent'></div>
    </div>
  )
}

export default Contacts