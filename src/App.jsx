import './index.css';
import { Routes, Route } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import NavBar from './NavBar.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';

function App() {
  document.body.style.overflow='hidden';
  return (
    <div className="App">
      <body>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <NavBar />

        <section className="home">
          <div className="home-content">
            <h1>Hi, I'm Toby Chantharasy</h1>
            <h3>Full Stack Developer</h3>
            <p>I'm a software developer who is eager to learn and collaborate within dynamic teams to craft user-centered applications. 
            I have recently shifted my focus to a career in software full-time, starting with self-study and then via the full-time 
            Software Engineering course at General Assembly.</p>
            <div className="btn-box">
              <a href="https://www.linkedin.com/in/toby-chantharasy/" target="_blank">Hire Me</a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=tobyxchan@gmail.com&tf=cm" target="_blank">Let's Talk</a>
            </div>
          </div>

          <span className="home-imgHover"></span>
        </section>
      </body>
    </div>
  );
}

export default App;
