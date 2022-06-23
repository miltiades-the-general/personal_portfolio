import React from 'react';
import styles from './styles/navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={`flex ${styles.nav_container}`}>
            <div className={`flex ml-8 mt-8 ${styles.header}`}>
                <h1 className="text-white header_text">Benjamin Gunnels</h1>
            </div>
            <div className="flex flex-row mt-10 mr-8 cursor-pointer">
                <p className="text-white main_text ml-4">Education</p>
                <p className="text-white main_text ml-4">Skills</p>
                <Link href="https://github.com/miltiades-the-general" rel="external"><a target="_blank" className="text-white main_text ml-4">Github</a></Link>
                <Link href="https://www.linkedin.com/in/ben-gunnels-61a00b242/" rel="external"><a target="_blank" className="text-white main_text ml-4">LinkedIn</a></Link>
            </div>

        </div>
    )
}

export default Navbar