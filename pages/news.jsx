import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import newsToday from '../public/assets/projects/news-today.png'

const news = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={newsToday} alt=''/>
        <div className='absolute top-[70%] max-w-[94%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-[10] p-2'>
          <h2>News Website</h2>
          <h3>React Js / Redux / SASS / Express Js / MySql</h3>
        </div>
    </div>
    <div className='max-w-[94%] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
      <div className='col-span-4'>
        <p className='mb-2'>Project</p>
        <h2 className='mb-3'>Overview</h2>
        <p>
          Online news application that contains a lot of information in it. Be a writer and share your perspective on something with the world. You can view all articles, search for articles, view articles by category, create a new article. If you are registered as user, you will be able to request to become an author, interact with the author this app also has feature such as send email to verify account and forgot password. During this team project i contributed as backend developer and making sql databases.
        </p>
        <a href='https://dhanz.me' target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
        <a href='https://github.com/bracket-technology' target='_blank' >
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
            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>SASS</p>
          </div>
          <div>
            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Express</p>
          </div>
          <div>
            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Axios</p>
          </div>
          <div>
            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>MySql</p>
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

export default news