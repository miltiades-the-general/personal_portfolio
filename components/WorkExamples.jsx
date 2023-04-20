import React from 'react';
import Paper from '@mui/material/Paper';
import styles from './styles/workExamples.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const cityTrans = '/city_trans_demo.png';
const marchMadness = "/march_madness_logo.png";
const metaflare = '/metaflare.png';
const seattle = '/seattle.jpg';
const medium = "/medium_screenshot.png";
const sanfran = "/san_fran.png";
const baseball = "/baseball.jpg";
const ml = "/ml.jpg";

const WorkExamples = () => {
  return (
    <div>
      {/* className same as source code, they depend on same stylesheet */}
      <ScrollAnimation className={styles.source_container} animateIn="animate__slideInDown" animateOnce="true">
        <Paper sx={{ width: '65%', backgroundColor: 'var(--very-light-green)', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <img className={styles.meta_image} src={cityTrans} alt="metaflare"/>
          <h1 className='header_text m-2'><b>City Trans</b></h1>
          <p className='main_text m-2'>An application that uses public transportation APIs to provide users with a network of America's public train transportation.</p> 
          <p className='main_text m-2'>Leverages MapBox Api, and Open Api to deliver a detailed map base, and train information respectively.</p> 
          <p className='ml-4 mb-4'>Link: <a href="https://github.com/miltiades-the-general/city_transit" target="_blank" rel="noreferrer">Github</a></p>
        </Paper>
        <Paper sx={{ width: '65%', backgroundColor: 'var(--very-light-green)', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <img className={styles.meta_image} src={marchMadness} alt="metaflare"/>
          <h1 className='header_text m-2'><b>2023 Kaggle March Machine Learning Madness</b></h1>
          <p className='main_text m-2'>A machine learning competition to predict the outcome of the 2023 Men's and Women's March Madness tournaments</p> 
          <p className='main_text m-2'>Built and tested a custom pipeline and machine learning model application from scratch</p> 
          <p className='ml-4 mb-4'>Link: <a href="https://github.com/miltiades-the-general/2023_march_madness_xgboost" target="_blank" rel="noreferrer">Github</a></p>
        </Paper>
        <Paper sx={{ width: '65%', backgroundColor: 'var(--very-light-green)', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <img className={styles.meta_image} src={metaflare} alt="metaflare"/>
          <h1 className='header_text m-2'><b>Web Developer for meta-flare.com</b></h1>
          <p className='main_text m-2'>Developed the website, data structures and technical needs for Metaflare. A company that consults with artists to turn their artwork into Non-Fungible Assets (NFTs). The website is built in the most modern React Js Framework and is highly responsive.</p>
          <p className='ml-4 mb-4'>Link: <a href="http://www.meta-flare.com" target="_blank" rel="noreferrer">meta-flare.com</a></p>
        </Paper>
        <Paper sx={{ width: '65%', backgroundColor: 'var(--very-light-green)', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <img className={styles.meta_image} src={seattle} alt="seattle"/>
          <h1 className='header_text m-2'><b>Closest Major City Locater</b></h1>
          <p className='main_text m-2'>An application to locate the closest major city to any other city in the United States.</p>
          <p className='ml-4'><b>Link:</b><a href="https://miltiades-the-general-closest-major-city-dashboard-a036hr.streamlitapp.com/" target="_blank" rel="noreferrer" className='ml-2'>closest_major_city</a></p>
          <p className='ml-4 mb-4'>Github: <a href="https://github.com/miltiades-the-general/closest_major_city" target="_blank" rel="noreferrer">https://github.com/miltiades-the-general/closest_major_city</a></p>
        </Paper>
        <Paper sx={{ width: '65%', backgroundColor: 'var(--very-light-green)', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <img className={styles.meta_image} src={sanfran} alt="san francisco houses"/>
          <h1 className='header_text m-2'><b>Real Estate Affordability</b></h1>
          <p className='main_text m-2'>An application to assess the affordability of available real estate in an area based on the local median household income, or a users income. Front end application coming soon!</p>
          <p className='ml-4 mb-4'><b>Github:</b><a href="https://github.com/miltiades-the-general/real_estate_affordability" target="_blank" rel="noreferrer" className='ml-2'>Real Estate Affordability</a></p>
        </Paper>
        <Paper sx={{ width: '65%', backgroundColor: 'var(--very-light-green)', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <img className={styles.meta_image} src={baseball} alt="baseball glove on field"/>
          <h1 className='header_text m-2'><b>MLB Player Value Analysis 2021</b></h1>
          <p className='main_text m-2'>An application to assess the value that MLB players provided to their teams in 2021 using python for data manipulation and analysis.</p>
          <p className='ml-4 mb-4'><b>Github:</b><a href="https://github.com/miltiades-the-general/mlb_player_value_analysis_2021" target="_blank" rel="noreferrer" className='ml-2'>MLB Player Values 2021</a></p>
        </Paper>
        <Paper sx={{ width: '65%', backgroundColor: 'var(--very-light-green)', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <img className={styles.meta_image} src={ml} alt="machine learning"/>
          <h1 className='header_text m-2'><b>MLB Player Classification using Machine Learning</b></h1>
          <p className='main_text m-2'>An application to scrape player data from Baseball Reference and categorize the rookie seasons of 1,000 MLB Players.</p>
          <p className='ml-4 mb-4'><b>Github:</b><a href="https://github.com/miltiades-the-general/mlb_player_classification" target="_blank" rel="noreferrer" className='ml-2'>MLB Player Classification</a></p>
        </Paper>
        <Paper sx={{ width: '65%', backgroundColor: 'var(--very-light-green)', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column'}}>
          <img className={styles.meta_image} src={medium} alt="medium"/>
          <h1 className='header_text m-2'><b>Medium Articles and Data Analysis</b></h1>
          <p className='main_text m-2'>Data Analysis Notebooks, Articles and Walkthroughs on the topics of Baseball and Real Estate, so far.</p>
          <ul className='mt-2 mb-2 ml-8' style={{ listStyleType: 'disc' }}>
            <a href="https://medium.com/@miltiadesgeneral/predicting-the-mens-and-women-s-march-madness-tournament-for-2023-using-xgboost-f5b1d8982aa8" target="_blank" rel="noreferrer"><li className="main_text">Predicting the Men’s and Women’s March Madness Tournament for 2023 Using XGBoost</li></a>
            <a href="https://medium.com/@miltiadesgeneral/mlb-team-payroll-value-analysis-using-python-for-the-2021-season-c85b5aff61e5" target="_blank" rel="noreferrer"><li className="main_text">MLB Team Payroll-Value Analysis using Python for the 2021 Season</li></a>
            <a href="https://medium.com/@miltiadesgeneral/mlb-player-value-analysis-for-the-2021-season-using-python-4cd80f3ba9fd" target="_blank" rel="noreferrer"><li className="main_text">MLB Player-Value analysis for the 2021 Season using Python</li></a>
            <a href="https://medium.com/@miltiadesgeneral/affordability-of-real-estate-for-the-top-10-most-populous-zip-codes-in-the-united-states-78ebf039d5f" target="_blank" rel="noreferrer"><li className="main_text">Affordability of Real Estate for the top 10 most populous zip codes in the United States</li></a>
            <a href="https://medium.com/@miltiadesgeneral/using-machine-learning-and-python-to-categorize-1-000-mlb-hitter-rookie-seasons-1afba6a17603" target="_blank" rel="noreferrer"><li className="main_text">Using Machine-Learning and Python to Categorize 1,000 MLB Hitter Rookie Seasons</li></a>
          </ul>
          <p className='ml-4 mb-4'><b>Link:</b><a href="https://medium.com/@miltiadesgeneral" target="_blank" rel="noreferrer" className='ml-2'>Medium</a></p>
        </Paper>
      </ScrollAnimation>
    </div>
  )
}

export default WorkExamples; 