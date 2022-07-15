import React from 'react';
import Paper from '@mui/material/Paper';
import styles from './styles/workExamples.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const metaflare = '/metaflare.png';

const WorkExamples = () => {
  return (
    <div>
      {/* className same as source code, they depend on same stylesheet */}
      <ScrollAnimation className={styles.source_container} animateIn="animate__slideInDown" animateOnce="true">
        <Paper sx={{ width: '65%', backgroundColor: 'var(--very-light-green)', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <img className={styles.meta_image} src={metaflare} alt="metaflare"/>
          <h1 className='header_text m-2'><b>Technical Executive at Metaflare</b></h1>
          <p className='main_text m-2'>Developed the website, data structures and technical needs for Metaflare. A company that consults with artists to turn their artwork into Non-Fungible Assets (NFTs). The website is built in the most modern React Js Framework and is highly responsive.</p>
          <p>Link: <a href="http://www.meta-flare.com" target="_blank" rel="noreferrer">meta-flare.com</a></p>
        </Paper>
      </ScrollAnimation>
    </div>
  )
}

export default WorkExamples 