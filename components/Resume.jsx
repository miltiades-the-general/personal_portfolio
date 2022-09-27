import React from 'react';
import Paper from '@mui/material/Paper';
import styles from './styles/workExamples.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Resume = () => {
    return (
        <div>
            <ScrollAnimation className={styles.source_container} animateIn="animate__slideInDown" animateOnce="true">
            <Paper className={`${styles.examples_paper} ${styles.resume_paper} mr-auto ml-auto py-4`}>
                <h1 className='font-bold header_text ml-4'><u>Resume</u></h1>
                <div className='m-4'>
                    <Paper className={`${styles.content_paper} mb-4`}>
                        <h1 className='main_text font-bold text-xl'><u>Education:</u></h1>
                        <p className='main_text font-bold mt-2'>UC Berkeley Coding Bootcamp</p>
                        <ul className='ml-4' style={{ listStyleType: "disc" }}>
                            <li>June 2022-Present</li>
                            <li>Financial Analysis using Python</li>
                            <li>Pandas Data Manipulation</li>
                            <li>NFT Volatility Analysis</li>
                        </ul>
                        <p className='main_text font-bold mt-2'>Pepperdine University</p>
                        <ul className='ml-4' style={{ listStyleType: "disc" }}>
                            <li>Malibu, California</li>
                            <li>August 2018-April 2022</li>
                            <li>Sports Medicine B.S.</li>
                            <li>3.74 GPA</li>
                            <li>Magna Cum Laude</li>
                            <li>4-year Regents Scholar</li>
                        </ul>
                        <p className='main_text font-bold mt-2'>Ridgeview High School</p>
                        <ul className='ml-4' style={{ listStyleType: "disc" }}>
                            <li>Redmond, Oregon</li>
                            <li>4.35 GPA</li>
                            <li>Achieved a 1510 Superscore SAT</li>
                        </ul> 
                    </Paper>
                </div>
                <div className='m-4'>
                    <Paper className={`${styles.content_paper} mb-4`}>
                        <h1 className='main_text font-bold text-xl'><u>Work Experience:</u></h1>
                        <p className='main_text font-bold mt-2'>Events by Design Event Delivery and Installation</p>
                        <ul className='ml-4' style={{ listStyleType: "disc" }}>
                            <li>Redmond, Oregon</li>
                            <li>Summer 2021, Summer 2022</li>
                            <li>Performed event equipment delivery, installation, take-down and maintenance for a small event rental company.</li>
                            <li>Installations often involved long days coordinating the construction of large canopies and tents requiring crews of 4 people with proper planning, communication and equipment knowledge.</li>
                            <li>The job required focus, determination, customer service skills and persistence in the face of oftentimes adverse conditions.</li>
                            <li>Reference (Julie Moyer): 541-903-2139</li>
                        </ul> 
                        <p className='main_text font-bold mt-2'>Big 5 Sporting Goods Sales Associate</p>
                        <ul className='ml-4' style={{ listStyleType: "disc" }}>
                            <li>Redmond, Oregon/Thousand Oaks, California</li>
                            <li>January 2021-October 2021</li>
                            <li>Performed Sales for Sporting Goods, shoes, and recreation equipment. Provided top-level customer service and customer accommodations. </li>
                            <li>Helped to manage inventory and adequate stocking on the sales floor, performed transactions for customer purchases.</li>
                            <li>Reference (Big 5 Redmond, Oregon): (541) 504-0628 </li>
                        </ul>
                        <p className='main_text font-bold mt-2'>Malibu Racquet Club Attendant</p>
                        <ul className='ml-4' style={{ listStyleType: "disc" }}>
                            <li>Malibu, California</li>
                            <li>January 2020-March 2020</li>
                            <li>Charged with managing and attending to tennis club facilities including scheduling, matchmaking, overseeing transactions, and routine club maintenance. </li>
                            <li>In charge of nightly and morningly bank duties and inventory checks. </li>
                            <li>Reference (Malibu Racquet Club): (310) 456-3313 </li>
                        </ul>
                        <p className='main_text font-bold mt-2'>Eagle Crest Resort Sports Center Associate</p>
                        <ul className='ml-4' style={{ listStyleType: "disc" }}>
                            <li>Redmond, Oregon</li>
                            <li>June 2018-June-2021</li>
                            <li>Attendant and concierge for guests attending resort recreation center and pool. Had to manage clientelle, transactions, inventory, scheduling and enforce rules and regulations.</li>
                            <li>Reference (Jody Sappington): 541-419-5501</li>
                        </ul> 
                    </Paper>
                    <Paper className={`${styles.content_paper} mb-4`}>
                        <p className='main_text font-bold mt-2'>Projects</p>
                        <ul className='ml-4' style={{ listStyleType: "disc" }}>
                            <li>Loan Analyzer: <a  style={{ color: 'blue' }} href="https://github.com/miltiades-the-general/loan_analyzer" rel="noreferrer" target="_blank">https://github.com/miltiades-the-general/loan_analyzer</a></li>
                            <li>Loan Qualifier: <a style={{ color: 'blue' }} href="https://github.com/miltiades-the-general/modular_loan_qualifier" rel="noreferrer" target="_blank">https://github.com/miltiades-the-general/modular_loan_qualifier</a></li>
                            <li>Portfolio Management tool: <a  style={{ color: 'blue' }} href="https://github.com/miltiades-the-general/portfolio_management_tool" rel="noreferrer" target="_blank">https://github.com/miltiades-the-general/portfolio_management_tool</a></li>
                            <li>Monte Carlo Returns simulator: <a  style={{ color: 'blue' }} href="https://github.com/miltiades-the-general/monte_carlo_financial_sim" rel="noreferrer" target="_blank">https://github.com/miltiades-the-general/monte_carlo_financial_sim</a></li>
                            <li>Crypto Arbitrage Tool: <a style={{ color: 'blue' }} href="https://github.com/miltiades-the-general/crypto_arbitrage" rel="noreferrer" target="_blank">https://github.com/miltiades-the-general/crypto_arbitrage</a></li>
                            <li>Monte Carlo Returns Simulator: <a  style={{ color: 'blue' }} href="https://github.com/miltiades-the-general/monte_carlo_financial_sim" rel="noreferrer" target="_blank">https://github.com/miltiades-the-general/monte_carlo_financial_sim</a></li>
                            <li>San Francisco Housing Simulator: <a  style={{ color: 'blue' }} href="https://github.com/miltiades-the-general/sfo_housing_analysis" rel="noreferrer" target="_blank">https://github.com/miltiades-the-general/sfo_housing_analysis</a></li>
                            <li>Passive Investing Tool: <a style={{ color: 'blue' }} href="https://github.com/miltiades-the-general/passive_investing" rel="noreferrer" target="_blank">https://github.com/miltiades-the-general/passive_investing</a></li>
                            <li>Venture Funding Application: <a style={{ color: 'blue' }} href="https://colab.research.google.com/drive/11q9og7bW2dy3I1ZxpGaRTJIIuARR0Qg_#scrollTo=K1Vgwz04URsH" rel="noreferrer" target="_blank">https://colab.research.google.com/drive/11q9og7bW2dy3I1ZxpGaRTJIIuARR0Qg_#scrollTo=K1Vgwz04URsH</a></li>
                        </ul>
                    </Paper>
                </div>
                </Paper>
            </ScrollAnimation>
        </div>
    )
}

export default Resume;