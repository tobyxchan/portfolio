import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import NavBar from './NavBar.jsx';
import image1 from './img/1.png';
import image2 from './img/2.png';
import image3 from './img/3.png';
import image4 from './img/4.png';

export default function About () {
  return (
    <div className="App">
      <body>
        <NavBar />
        <h1 className="p-title">My Projects:</h1>
        <section className="portfolio">
          <Carousel className="carousel">
            <div>
              <img src={image1} />
              <div className="btn-box">
                <a href="https://github.com/tobyxchan/rhythmix" target="_blank"><strong>RHYTHMIX</strong></a>
              </div>
              <p>Music Database App</p>
            </div>
            <div>
              <img src={image2} />
              <div className="btn-box">
                <a href="https://github.com/Bharatchandran/summitPrj3" target="_blank"><strong>SUMMIT</strong></a>
              </div>
              <p>Social Forum App</p>
            </div>
            <div>
              <img src={image3} />
              <div className="btn-box">
                <a href="https://github.com/tobyxchan/dicegoblin" target="_blank"><strong>DICE GOBLIN</strong></a>
              </div>
              <p>Tabletop RPG App</p>
            </div>
            <div>
              <img src={image4} />
              <div className="btn-box">
                <a href="https://github.com/tobyxchan/minesweeper" target="_blank"><strong>MINESWEEPER</strong></a>
              </div>
              <p>Logic Web Game</p>
            </div>
          </Carousel>

          <span className="home-imgHover"></span>
        </section>
      </body>
    </div>
  )
}