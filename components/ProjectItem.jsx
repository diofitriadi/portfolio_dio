import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({title, backgroundImg, projectUrl, builtWith}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-[100%] shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#6e7682] to-[#4B5563] '>
      <Image 
        className='rounded-xl group-hover:opacity-40'
        src={backgroundImg} 
        alt='/'
        width='1400px'
        height='800px'
      />
    <div className='hidden group-hover:block absolute top-[25%] left-[25%] translate-x-[50%] md:top-[32%] md:left-[32%]'>
      <h3 className='text-md text-white tracking-wider text-center'>{title}</h3>
      <p className ='pb-4 text-white text-center'>{builtWith}</p>
      <Link href={projectUrl}>
        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-md cursor-pointer'>More Info</p>
      </Link>
    </div>

    </div>
  )
}

export default ProjectItem