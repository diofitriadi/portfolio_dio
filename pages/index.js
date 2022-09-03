import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contacts from '../components/Contacts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dio Fitriadi | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>

    </div>
  )
}
