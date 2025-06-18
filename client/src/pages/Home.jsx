
import React from 'react'

import Hero from '../components/Hero'

import FadeInScroll from '../components/style/FadeInScroll'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import ContactSection from '../components/ContactSection'
import ContactFix from '../components/utils/ContactFix'
import MailtoFix from '../components/utils/MailtoFix'


const Home = () => {

  const Sections = [
    { id: 'about', element: <About /> },
    { id: 'experience', element: <Experience /> },
    { id: 'projects', element: <Projects /> },
    { id: 'contact', element: <ContactSection /> },
  ]
  return (
    <div className='flex flex-col mx-auto '>
      <section id='hero' className='flex items-center justify-center'>
        <Hero />
      </section>

      <div className='bg-secondary opacity-30 hover:opacity-100 transition-opacity duration-300'>
        <img src='/mountain-3.jpg' className='w-full h-full object-cover' />
      </div>
      {
        Sections.map((section, index) => {
          return (
            <FadeInScroll key={index}>
              <section id={section.id}>
                {section.element}
              </section>
            </FadeInScroll>
          )
        })
      }

      <ContactFix />
      <MailtoFix email={'pongsatorn.rk@gmail.com'} />

      {/* inspried : https://v3.brittanychiang.com/ */}
      {/* inspried : https://v4.brittanychiang.com/ */}
      {/* inspried : https://brittanychiang.com/ */}
    </div>
  )
}

export default Home