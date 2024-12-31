import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import MovieCards from '../../Components/MovieCards/MovieCards'
import Footer from '../../Components/Footer/Footer'
import ImgSlider from '../../Components/Slider/Slider'
import MoviesByGenre from '../../Components/MoviesByGenre/MoviesByGenre'
const Home = () => {

  return (
    <div className="home">
        <Header />
        <ImgSlider/>
        <MoviesByGenre/>

        <div className="more_cards">
            <MovieCards title={"dddd"}/>
        </div>
        <Footer />
    </div>
    
  )
}

export default Home