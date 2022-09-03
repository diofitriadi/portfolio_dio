import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link"
import {useRouter} from 'next/router'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from "react-icons/ai"
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [LinkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()

  useEffect(()=> {
    if (
      router.asPath === '/movies' ||
      router.asPath === '/news' ||
      router.asPath === '/coffee' ||
      router.asPath === '/job' 
    ) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    } else {
      setNav('#ecf0f3')
      setLinkColor('#1f2937')
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(()=> {
    const handleShadow = () => {
      if(window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  },[])

  return (
    <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href='/'>
          <Image 
            src="/navLogo.png" 
            alt="/" 
            width="150" 
            height="90" 
            style={{marginLeft: -30, marginTop: 5}}
          />                
        </Link>
          <div>
            <ul style={{color: `${LinkColor}`}} className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover: border-b">Home</li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover: border-b">About</li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover: border-b">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover: border-b">Projects</li>
              </Link>
              <Link href="/#contacts">
                <li className="ml-10 text-sm uppercase hover: border-b mr-5">Contact</li>
              </Link>
            </ul>
            <div className="md:hidden" onClick={handleNav} >
              <AiOutlineMenu size={25} className="cursor-pointer mr-5"/>
            </div>
        </div>
      </div>
      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href='/'>
              <Image src="/navLogo.png" 
                width="100" 
                height="60"
                alt="/" 
                style={{marginLeft: -30}}
              /> 
              </Link>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer" onClick={handleNav}>
                <AiOutlineClose/>
              </div>
            </div>
            <div className="border-b border-gray-300 my-2">
              <p className="w-[90%] md:w-[80%] py-4 ">Let's Create Magnificent Things Together</p>
            </div>
          </div>
            <div className="flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={()=> setNav(false)} className="py-3 text-sm">Home</li>
                </Link>
                <Link href="/#about">
                  <li onClick={()=> setNav(false)} className="py-3 text-sm">About</li>
                </Link>
                <Link href="/#skills">
                  <li onClick={()=> setNav(false)} className="py-3 text-sm">Skills</li>
                </Link>
                <Link href="/#projects">
                  <li onClick={()=> setNav(false)} className="py-3 text-sm">Projects</li>
                </Link>
                <Link href="/#contacts">
                  <li onClick={()=> setNav(false)} className="py-3 text-sm">Contacts</li>
                </Link>
              </ul>
              <div className="pt-12">
                <p className="uppercase tracking-widest text-[#7200e3]">Let's Connect</p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="https://www.linkedin.com/in/muhammad-dio-fitriadi/" target="_blank">
                      <FaLinkedinIn/>
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="https://github.com/diofitriadi" target="_blank">
                      <FaGithub/>
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="https://mail.google.com/" target="_blank">
                      <AiOutlineMail/>
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="https://wa.me/+6289685057385" target="_blank">
                      <BsFillPersonLinesFill/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
