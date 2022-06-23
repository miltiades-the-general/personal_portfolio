import React from 'react';
import Paper from '@mui/material/Paper';
import styles from './styles/hero.module.css';
import { ImBooks } from 'react-icons/im';
import { FaMountain } from 'react-icons/fa';
import { SiMusicbrainz } from 'react-icons/si';
const headshot = "/headshot.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Hero = () => {
  return (
    <div className="justify-center mx-auto">
      <div style={{ backgroundColor: 'var(--dark-green)'}}>
        <Paper className={styles.hero_paper} sx={{ backgroundColor: 'var(--very-light-green)', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto'}}>
          <div className={`${styles.content_div} flex flex-row animate__fadeIn`}>
              <img className={`${styles.headshot_image}`} src={headshot} alt="headshot"/>
            <div className={`${styles.header_box}`}>
              <h1 className="m-4 text-3xl main_text">Hello my name is <br/><b>Benjamin Gunnels</b><br/>and this is a little bit about me...</h1>
              <div className='flex flex-row'>
                <ImBooks size="35" style={{ marginLeft: '1rem'}}/>
                <h1 className='main_text text-2xl ml-2'>Education</h1>
              </div>
              <ul className='ml-8 mt-2' style={{ listStyleType: 'disc' }}>
                <li className="main_text">Pepperdine University</li>
                <li className="main_text">Graduate Seaver College</li>
                <li className="main_text">Sports Medicine B.S.</li>
                <li className="main_text">Magna Cum Laude, 3.74 GPA</li>
                <li className="main_text">Regents Scholar</li>
              </ul>
              <div className='flex flex-row mt-6'>
                <FaMountain size="35" style={{ marginLeft: '1rem'}}/>
                <h1 className='main_text text-2xl ml-2'>Where am I from?</h1>
              </div>
              <ul className='ml-8 mt-2' style={{ listStyleType: 'disc' }}>
                <li className="main_text">Bend, Oregon</li>
              </ul>
              <div className='flex flex-row mt-6'>
                <SiMusicbrainz size="35" style={{ marginLeft: '1rem'}}/>
                <h1 className='main_text text-2xl ml-2'>Interests</h1>
              </div>
              <ul className='ml-8 mt-2 mb-6' style={{ listStyleType: 'disc' }}>
                <li className="main_text">Computer Science</li>
                <li className="main_text">Front End Applications</li>
                <li className="main_text">Data-Intensive Applications</li>
                <li className="main_text">Blockchain Technology</li>
              </ul>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default Hero