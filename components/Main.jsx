import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id="home" className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 mt-20 '>Let's Create Magnificent Things Togerther</p>
          <h1 className='py-2 text-gray-700'>
            Hello, I'm <span className='text-[#7200e3]'>Dio</span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            A Full-Stack Web Developer
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            i'm a fullstack specializing in building front-end, back-end web development  and mobile application. Currently i'm graduated from bootcamp and trying to implement all skills that i have learned to real work.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://www.linkedin.com/in/muhammad-dio-fitriadi/">
                <FaLinkedinIn/>
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://github.com/diofitriadi">
                <FaGithub/>
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://mail.google.com/">
                <AiOutlineMail/>
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://wa.me/+6289685057385">
                <BsFillPersonFill/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main