import './index.css';
import NavBar from './NavBar.jsx';

export default function About () {
  return (
    <div className="App">
      <body>
        <NavBar />

        <section className="home">
          <div className="home-content">
            <h3>Contact Information:</h3><br></br>
            <div className="contact-links">
              <h2>tobyxchan@gmail.com</h2>
              <h2>0416 027 157</h2>
            </div>
          </div>

          <span className="home-imgHover"></span>
        </section>
      </body>
    </div>
  )
}