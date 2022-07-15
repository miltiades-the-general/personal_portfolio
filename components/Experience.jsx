import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { toast } from 'react-hot-toast';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import styles from './styles/workExamples.module.css';


const Experience = () => {
    const handleClick = () => {
        toast.success("A helpful alert!")
    }
    return (
        <div>
            <ScrollAnimation className={styles.source_container} animateIn="animate__slideInDown" animateOnce="true">
                <Paper sx={{ width: '65%', backgroundColor: 'var(--very-light-green)', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', paddingLeft: '2rem', paddingTop: '1rem', paddingBottom: '1rem' }}>
                    <h1 className='header_text'>Technical Skills and Experience</h1>
                        <div className='ml-4'>
                            <ul style={{ listStyleType: "disc" }}>
                                <li>Proficient in CSS and HTML</li>
                                <li>Experienced in web development using React and Javascript and building applications using Next JS</li>
                                <li>Experience with Python including Financial Analysis. Portfolio Research, Algorithmic Trading, and Machine Learning</li>
                                <li>I have worked frequently with the Material UI library to create modern responsive web-applications including components like this button: <Button sx={{ backgroundColor: "blue" }} onClick={handleClick} variant="contained">Click Me for a Helpful Alert!</Button></li>
                            </ul>
                        </div>
                </Paper>
            </ScrollAnimation>
        </div>
    )
}

export default Experience;