
import React from 'react'
import FadeIn from '../components/style/FadeIn'
import MailTo from '../components/MailTo'
import About from '../components/About'
import Contacts from '../components/Contacts'

const Home = () => {
  const numbers = [1, 2, 3, 4, 5]
  const components = [
    {id: 'about', element: <About />},
    {id: 'contacts', element: <Contacts />},
    {id: 'mailto', element: <MailTo email={'pongsatorn.rk@gmail.com'} />},
  ]
  return (
    <div className='min-h-screen flex flex-col mx-auto'>
      <section id='about' className='h-screen'>
        <img src="/mountain-3.jpg" alt="" />

        {
          numbers.map((num, i) => {
            return (
              <FadeIn delay={i * 500} duration={500}>
                <div className='border p-2 m-3 rounded-md text-accent'>{num}</div>
              </FadeIn>
            )
          })
        }
      </section>
      
      {
        components.map(({id, element} , index)=>{
          return(
            <FadeIn key={id} delay={index * 500} duration={500}>
              {element}
            </FadeIn>
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