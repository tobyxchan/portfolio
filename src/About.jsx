import './index.css';
import NavBar from './NavBar.jsx';
import Resume from './Resume/Resume.pdf';

export default function About () {
  return (
    <div className="App">
      <body>
        <NavBar />

        <section className="home">
          <div className="home-content">
            <h3>Learn About Me:</h3>
            <p>I'm a software developer who is eager to learn and collaborate within dynamic teams to craft user-centered applications. 
            I have recently shifted my focus to a career in software full-time, starting with self-study and then via the full-time 
            Software Engineering course at General Assembly.<br></br><br></br> My unique blend of both audio and software engineering knowledge equips me 
            to approach coding challenges with a fresh perspective, plenty of enthusiasm and an ear for detail. My background also 
            ensures that I'm always ready to utilise my creative background by fostering innovative software solutions.
            <br></br><br></br>
            I aim to inspire positive change through creative and innovative work.</p>
            <div className="btn-box">
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=tobyxchan@gmail.com&tf=cm" target="_blank">Start Here</a>
              <a href={Resume} target="_blank">Resume</a>
            </div>
          </div>

          <span className="home-imgHover"></span>
        </section>
      </body>
    </div>
  )
}