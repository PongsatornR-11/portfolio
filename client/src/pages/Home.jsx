
import React from 'react'

import Hero from '../components/Hero'

import FadeInScroll from '../components/style/FadeInScroll'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import ContactSection from '../components/ContactSection'
import ContactFix from '../components/utils/ContactFix'
import MailtoFix from '../components/utils/MailtoFix'
import FadeIn from '../components/style/FadeIn'
import FancyLink from '../components/style/FancyLink'

const Sections = [
  { id: 'about', element: <About /> },
  { id: 'experience', element: <Experience /> },
  { id: 'projects', element: <Projects /> },
  { id: 'contact', element: <ContactSection /> },
]


const Home = () => {
  return (
    <div className='flex flex-col mx-auto '>
      <Hero />
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
     
      {/* inspried : https://v3.brittanychiang.com/ */}
      {/* inspried : https://v4.brittanychiang.com/ */}
      {/* inspried : https://brittanychiang.com/ */}
    </div>
  )
}

export default Home