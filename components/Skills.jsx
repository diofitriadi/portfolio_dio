import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills" className='w-fit lg:h-screen p-2 mx-10'>
      <div className='w-[120%] lg:w-[100%] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-gray-600 font-bold'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration:300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/html.png' 
                alt='/'
                width='64px'
                height='64px'
              />
            </div>            
            <div className='flex flex-col items-center justify-center'>
              <h3>HTML</h3>
            </div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration:300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/css.png' 
                alt='/'
                width='64px'
                height='64px'
              />
            </div>            
            <div className='flex flex-col items-center justify-center'>
              <h3>CSS</h3>
            </div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration:300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/javascript.png' 
                alt='/'
                width='64px'
                height='64px'
              />
            </div>            
            <div className='flex flex-col items-center justify-center'>
              <h3>Javascript</h3>
            </div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration:300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/node.png' 
                alt='/'
                width='64px'
                height='64px'
              />
            </div>            
            <div className='flex flex-col items-center justify-center'>
              <h3>Node Js</h3>
            </div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration:300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/react.png' 
                alt='/'
                width='64px'
                height='64px'
              />
            </div>            
            <div className='flex flex-col items-center justify-center'>
              <h3>React</h3>
            </div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration:300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/react-native.png' 
                alt='/'
                width='64px'
                height='64px'
              />
            </div>            
            <div className='flex flex-col items-center justify-center'>
              <h3>React Native </h3>
            </div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration:300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/redux.png' 
                alt='/'
                width='64px'
                height='64px'
              />
            </div>            
            <div className='flex flex-col items-center justify-center'>
              <h3>Redux</h3>
            </div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration:300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/tailwind.png' 
                alt='/'
                width='64px'
                height='64px'
              />
            </div>            
            <div className='flex flex-col items-center justify-center'>
              <h3>Tailwind CSS</h3>
            </div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration:300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/nextjs.png' 
                alt='/'
                width='64px'
                height='64px'
              />
            </div>            
            <div className='flex flex-col items-center justify-center'>
              <h3>NEXT JS</h3>
            </div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration:300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/express.png' 
                alt='/'
                width='64px'
                height='64px'
              />
            </div>            
            <div className='flex flex-col items-center justify-center'>
              <h3>Express Js</h3>
            </div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration:300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/sql.png' 
                alt='/'
                width='64px'
                height='64px'
              />
            </div>            
            <div className='flex flex-col items-center justify-center'>
              <h3>My SQL</h3>
            </div>
          </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration:300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/github1.png' 
                alt='/'
                width='64px'
                height='64px'
              />
            </div>            
            <div className='flex flex-col items-center justify-center'>
              <h3>GitHub</h3>
            </div>
          </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Skills