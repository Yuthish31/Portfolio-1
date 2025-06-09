import { useState, useEffect } from 'react';
import './Home.css';
import { FiDownload } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import heroimg from '../assets/img/hero.png';
import Aboutimg from '../assets/img/Good-Boy-Aura.png';
import { Link } from 'react-router-dom';
import ReactRotatingText from 'react-rotating-text';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h4>Hello, I'm</h4>
            <h1 className="animated-name">
              <span className="name-letter">N</span>
              <span className="name-letter">a</span>
              <span className="name-letter">g</span>
              <span className="name-letter">a</span>
              <span className="name-letter">a</span>
              <span className="name-letter">r</span>
              <span className="name-letter">j</span>
              <span className="name-letter">u</span>
              <span className="name-letter">n</span>
              <span className="name-letter space"> </span>
              <span className="name-letter">R</span>
            </h1>
            <h3><ReactRotatingText 
              items={[
                'Frontend Developer',
                'Communicator',
                'Creative Designer',
                'Web Developer'
              ]} 
              pause={2000}
              typingInterval={100}
              deletingInterval={50}
              emptyPause={500}
            /></h3>
            <p>I build exceptional digital experiences with modern web technologies.</p>
            <div className="hero-buttons">
            <a href="../assets/Nagaarjun_R_Resume.pdf" download className="primary-btn icon-btn"><FiDownload style={{marginRight: "4px" }} /><span>Resume</span></a>
            <Link to="/contact" className="secondary-btn icon-btn"><MdEmail style={{marginRight: "4px" }} /><span>Contact Me</span></Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={heroimg} alt="hero" />
            </div>
          </div>
        </div>
        <div className="social-links">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="/contact"><i className="fas fa-paper-plane"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
          <img src={Aboutimg} alt="About" />
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate frontend developer with expertise in React, JavaScript, and modern web development. 
              I create beautiful, responsive, and user-friendly websites and applications.
            </p>
            <div className="about-details">
              <div className="detail-item NDI">
                <span>Name:</span>
                <p>Nagaarjun R</p>
              </div>
              <div className="detail-item EDI">
                <span>Email:</span>
                <p>nagaarjunraju57@gmail.com</p>
              </div>
              <div className="detail-item MDI">
                <span>Mobile:</span>
                <p>+91 7358916321</p>
              </div>
              <div className="detail-item LDI">
                <span>Location:</span>
                <p>D/No:1466 Upparigai North Street,Manojipatti,
                Thanjavur amilnadu-613 004</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-html5"></i>
                </div>
                <span>HTML5</span>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-css3-alt"></i>
                </div>
                <span>CSS3</span>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-python"></i>
                </div>
                <span>Python</span>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: '56%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fab fa-node"></i>
                </div>
                <span>Node.js</span>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fas fa-database"></i>
                </div>
                <span>My SQL</span>
                <div className="skill-progress">
                  <div className="progress-bar" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;