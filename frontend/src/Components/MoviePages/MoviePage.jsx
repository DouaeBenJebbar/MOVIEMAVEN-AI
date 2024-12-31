import React from 'react'
import './Home.css'

const Home = () => {

  return (
    <div className="MoviePage">
        <div className='MoviePage'>
            <img src={hero_banner} alt="" className='banner-img' />
            <div className='hero-caption'>
                <img src={hero_title} alt="" className='caption-img'/>
                <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy</p>
                <div className="hero-buttons">
                    <button className='btn'><img src={play_icon} alt="" />Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
                </div>
                <MovieCards />
            </div>
        </div>
    </div>
    
  )
}

export default Home