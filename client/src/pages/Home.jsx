
import React from 'react'

import Hero from '../components/Hero'

import FadeInScroll from '../components/style/FadeInScroll'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import ContactSection from '../components/ContactSection'
import Skills from '../components/Skills'
import Reference from '../components/Reference'

const Sections = [
  { id: 'about', element: <About /> },
  { id: 'skills', element: <Skills /> },
  { id: 'experience', element: <Experience /> },
  { id: 'projects', element: <Projects /> },
  { id: 'contact', element: <ContactSection /> },
  { id: 'Reference', element: <Reference /> },
]


const Home = () => {
  return (
    <div className='flex flex-col mx-auto '>
      <Hero />
      {
        Sections.map((section, index) => {
          return (
            <FadeInScroll key={index} threshold={0.3}>
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