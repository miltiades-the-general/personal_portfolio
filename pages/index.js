import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { ECommerce, Navbar, Hero, SourceCode, WorkExamples, Experience, Resume, Footer } from '../components';

export default function Home() {
  return (
    <div className="background_color">
      <div className='h-32'>
        <Navbar/>
      </div>
      <Hero/>
      <WorkExamples />
      <ECommerce />
      <Experience/>
      <Resume/>
      <SourceCode /> 
      <Footer/>
    </div>
  )
}
