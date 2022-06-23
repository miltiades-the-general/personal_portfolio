import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Navbar, Hero } from '../components';

export default function Home() {
  return (
    <div className="background_color">
      <div className='h-32'>
        <Navbar/>
      </div>
      <Hero/>
      <div style={{ height: '200px'}}/>
    </div>
  )
}
