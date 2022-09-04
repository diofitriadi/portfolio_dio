import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className="w-fit md:h-screen p-2 flex items-center py-16 mx-10">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 text-xl tracking-widest text-gray-700 font-bold">ABOUT</p>
          <h2 className="pb-4">Who I Am</h2>
          <p className="py-2 text-gray-600">There's never too late for learning. </p>
          <p className="py-2 text-gray-600">
            I am interest in programming ever since i was browsing the internet, what cool things happen behind our eye's can see. I didn't have the opportunity to learn coding because during high school i got accepted in social field. Also at university i graduated with tourism degree. After graduated i wanted to pursue things that i really love which is web programming. 
          </p>
          <p className="py-2 text-gray-600">
            I decided to join bootcamp to give me the comprehensive view about what i can do as fullstack web developer and gained experience in mobile software development. After an extensive training , I learn a lot and it's time to show what i have done and apply all of the things that i have learned in bootcamp.
          </p>
          <Link href='/#projects'>
            <p className="py-2 text-gray-600 underline hover:cursor-pointer">Click here to see all of my projects</p>
          </Link>
        </div>
        <div className="w-full h-fit m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/"/>
        </div>
      </div>
    </div>
  )
}

export default About