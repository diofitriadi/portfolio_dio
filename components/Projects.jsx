import React from 'react'
import ProjectItem from './ProjectItem'
import tickitz from '../public/assets/projects/tickitz-homepage.png'
import coffee from '../public/assets/projects/coffee-shop.png'
import newsToday from '../public/assets/projects/news-today.png'
import tickitzApp from '../public/assets/projects/tickitzapp.png'

const Projects = () => {
  return (
    <div id="projects" className='w-[90%] mx-auto'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-gray-600 font-bold'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
      </div>
      <div className='grid md:grid-cols-2 gap-8'>

      <ProjectItem 
        title='Movies Web' 
        backgroundImg={tickitz} 
        projectUrl='/movies'
        builtWith='React Js'
      />
      <ProjectItem 
        title='News Website' 
        backgroundImg={newsToday} 
        projectUrl='/news'
        builtWith='React Js'
      />      
      <ProjectItem 
        title='Coffee Shop' 
        backgroundImg={coffee} 
        projectUrl='/coffee-shop'
        builtWith='Next Js'
      />
      <ProjectItem 
        title='Job Website' 
        backgroundImg={tickitz} 
        projectUrl='/job-website'
        builtWith='Next Js'
      />
      <ProjectItem 
        title='Tickitz App' 
        backgroundImg={tickitzApp} 
        projectUrl='/tickitz-app'
        builtWith='React Native'
      />
      

      </div>
    </div>
  )
}

export default Projects