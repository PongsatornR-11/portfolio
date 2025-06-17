
import React from 'react'
import FadeIn from '../components/style/FadeIn'

import MailTo from '../components/utils/MailTo_old'
import Contacts from '../components/utils/Contacts_old'

import FadeInScroll from '../components/style/FadeInScroll'

import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import ContactSection from '../components/ContactSection'
import ContactFix from '../components/utils/ContactFix'

const Home = () => {

  const Sections = [
    { id: 'about', element: <About /> },
    { id: 'experience', element: <Experience /> },
    { id: 'projects', element: <Projects /> },
    { id: 'contact', element: <ContactSection /> },
  ]
  return (
    <div className='flex flex-col mx-auto'>
      <section id='hero' className='h-screen'>
        <img src="/mountain-3.jpg" alt="" />
      </section>

      <ContactFix />
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

      {/* <section id="about" className="h-screen flex items-center justify-center border text-white">
        about
      </section> */}
      {/* <section id="experience" className="h-screen flex items-center justify-center border text-white">experience</section>
      <section id="projects" className="h-screen flex items-center justify-center border text-white">projects</section>
      <section id="contact" className="h-screen flex items-center justify-center border text-white">contact</section> */}


      {/* inspried : https://v3.brittanychiang.com/ */}
      {/* inspried : https://v4.brittanychiang.com/ */}
      {/* inspried : https://brittanychiang.com/ */}
      {/* pending
      0. scroll to each section > done
      1. hero loading webpage 
      2. slowly showing up component 
      https://reactcommunity.org/react-transition-group/css-transition
      https://yqnn.github.io/svg-path-editor/ 
      */}
    </div>
  )
}

export default Home