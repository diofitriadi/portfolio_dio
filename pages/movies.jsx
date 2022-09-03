import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import tickitz from '../public/assets/projects/tickitz-homepage.png'

const movies = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={tickitz} alt=''/>
          <div className='absolute top-[70%] max-w-[94%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-[10] p-2'>
            <h2>Movies Website</h2>
            <h3>React Js / Redux / CSS Bootstrap / Express Js / MySql</h3>
          </div>
      </div>
      <div className='max-w-[94%] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='mb-2'>Project</p>
          <h2 className='mb-3'>Overview</h2>
          <p>
            This Website was built using React Js and is hosted in netlify and heroku. Database is built using mysql node js.
            Users able to Register and login. You will be able to see upcoming and airing movies. If you logged in as admin you will be able to add, edit, or remove movies. This website also has feature such as search by title, genre, or release date and pagination
          </p>
          <a href='https://tickitz-fe-dio.netlify.app'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a href='https://github.com/diofitriadi/tickitz_fe' >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
            </div>
            <div>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Redux</p>
            </div>
            <div>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS Bootstrap</p>
            </div>
            <div>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Axios</p>
            </div>
            <div>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Moment Js</p>
            </div>
            <div>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Dotenv</p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default movies