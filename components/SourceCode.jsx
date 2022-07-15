import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { IoCopy } from 'react-icons/io';
import { BiCopy } from 'react-icons/bi';
import { FcCheckmark } from 'react-icons/fc';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import styles from './styles/workExamples.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const WorkExamples = () => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("https://github.com/miltiades-the-general/personal_portfolio.git");
    setCopied(true);
    setOpen(true);
    setTimeout(function(){
      setCopied(false);
  }, 3000);
  }
  const handleClickLinkedin = () => {
    navigator.clipboard.writeText("https://www.linkedin.com/in/ben-gunnels-61a00b242/");
    setCopied(true);
    setOpen(true);
    setTimeout(function(){
      setCopied(false);
  }, 3000);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className='mt-10'>
      <ScrollAnimation className={styles.source_container} animateIn="animate__slideInDown" animateOnce="true">
        <Paper className={styles.examples_paper} sx={{ width: '85%', backgroundColor: 'var(--very-light-green)', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'row', paddingBottom: '4rem'}}>
            <div className={`${styles.image_container}`}>
              <img style={{ objectFit: 'cover', height: '500px', width: '600px', borderRadius: '4px' }}src="https://bschool.pepperdine.edu/blog/images/zoom-background-7-large.jpg" alt="Pepperdine"/>
              {/* <div style={{ width: '1000px', height: '800px',  backgroundImage: 'url(https://bschool.pepperdine.edu/blog/images/zoom-background-2-large.jpg)'}}/> */}
            </div>
            <div className='flex-column'>
              <div className={`${styles.code_container}`}>
                <h1 className='header_text'>Code for this Website:</h1>
                <Paper className={styles.github_link_container}>
                  <div className={`flex flex-row main_text ml-4 mt-auto mb-auto cursor-pointer ${styles.link_bar}`}>
                    <div className='long_link'>
                      <Link className='long_link ml-4 mt-auto mb-auto cursor-pointer ' href="https://github.com/miltiades-the-general/personal_portfolio.git"><a target="_blank"><p><u>https://github.com/miltiades-the-general/personal_portfolio.git</u></p></a></Link>
                    </div>
                    <div onClick={handleClick} className={styles.copy_button} style={{ height: '25px', paddingLeft: '8px', marginLeft: '3rem', marginTop: '.15rem', borderLeft: '2px solid var(--dark-green)'}}>
                      {!copied && 
                        <BiCopy size="20"/>
                      }
                      {copied && 
                        <FcCheckmark size="20"/>
                      }
                        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                          <Alert severity="success" sx={{ width: '100%' }}>
                            Copied to Clipboard!
                          </Alert>
                      </Snackbar>
                    </div>
                  </div>
                </Paper>
                  <div>
                      <h1 className='header_text'>Contact me at:</h1>
                      <Paper sx={{ backgroundColor: "var(--bar-light-green)"}}className={`flex flex-col mr-4 cursor-pointer mt-4 pl-4`}>
                          <p className='main_text'>bengunnels8@gmail.com</p>
                        <div onClick={handleClickLinkedin}>
                          <p className='main_text'>https://www.linkedin.com/in/ben-gunnels-61a00b242/</p>
                        </div>
                      </Paper>
                  </div>
              </div>
            </div>
        </Paper>
      </ScrollAnimation>
    </div>
  )
}
 
export default WorkExamples; 