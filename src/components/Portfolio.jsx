import { useState } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="portfolio-container">
      {/* Animated Particles Background */}
      <div className="particles-background">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
            },
            particles: {
              color: { value: "#147efb" },
              links: {
                color: "#147efb",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 80,
              },
              opacity: {
                value: 0.5,
                animation: { enable: true, speed: 1 },
              },
              size: {
                value: { min: 1, max: 3 },
                animation: { enable: true, speed: 2 },
              },
            },
          }}
        />
      </div>

      {/* Main Content */}
      <div className="portfolio-content">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="portfolio-title">My Portfolio</h1>
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button
              className={`tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button
              className={`tab ${activeTab === 'certificates' ? 'active' : ''}`}
              onClick={() => setActiveTab('certificates')}
            >
              Certificates
            </button>
          </div>
        </motion.header>

        {/* Experience Section */}
        {activeTab === 'experience' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="section"
          >
            <div className="section-header">
              <h2>INTERNSHIPS</h2>
              <div className="underline"></div>
            </div>
            
            <div className="experience-item">
              <h3>WEB DEVELOPMENT AND DIGITAL MARKETING</h3>
              <p className="date">April 02, 2024 to April 25, 2024</p>
              <p className="company">MJ BIOCARE SOLUTIONS, COIMBATORE</p>
              <ul className="responsibilities">
                <li>Developed responsive web interfaces using React</li>
                <li>Implemented SEO strategies</li>
                <li>Created social media marketing campaigns</li>
              </ul>
            </div>

            <div className="section-header">
              <h2>PROJECTS</h2>
              <div className="underline"></div>
            </div>
            
            <div className="project-item">
              <h3>Dora Photography Website</h3>
              <p>Designed and developed frontend for photography portfolio</p>
              <div className="tech-stack">
                <span>React</span>
                <span>CSS3</span>
                <span>JavaScript</span>
              </div>
            </div>
          </motion.section>
        )}

        {/* Education Section */}
        {activeTab === 'education' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="section"
          >
            <div className="education-item">
              <h3>Akshaya College of Arts and Science</h3>
              <p className="degree">B.Sc. Computer Science</p>
              <p className="date">2022 - 2025</p>
              <p className="grade">CGPA: 7.5/10</p>
            </div>

            <div className="education-item">
              <h3>Kalyana Sundram Higher Secondary School</h3>
              <p className="degree">HSC: Computer Application</p>
              <p className="date">2022</p>
              <p className="grade">Percentage: 65%</p>
            </div>

            <div className="education-item">
              <h3>Government High School, Manojipatti</h3>
              <p className="degree">SSLC</p>
              <p className="date">2020</p>
              <p className="grade">Percentage: 70%</p>
            </div>
          </motion.section>
        )}

        {/* Certificates Section */}
        {activeTab === 'certificates' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="section"
          >
            <div className="certificates-grid">
              <div className="certificate-card">
                <h3>Java Programming Beginner</h3>
                <p>Great Learning Academy</p>
              </div>

              <div className="certificate-card">
                <h3>Futuristic AI and Open Source</h3>
                <p>National Level Seminar</p>
              </div>

              <div className="certificate-card">
                <h3>Communicative English</h3>
                <p>TCS ion</p>
              </div>

              <div className="certificate-card">
                <h3>Communication Skills</h3>
                <p>Upskill (Cambridge University)</p>
              </div>
            </div>

            <div className="personal-details">
              <div className="section-header">
                <h2>PERSONAL DETAILS</h2>
                <div className="underline"></div>
              </div>
              <div className="details-grid">
                <div>
                  <h4>Date of Birth:</h4>
                  <p>14/02/2004</p>
                </div>
                <div>
                  <h4>Languages:</h4>
                  <p>Tamil, English</p>
                </div>
                <div>
                  <h4>Location:</h4>
                  <p>Thanjavur, TamilNadu</p>
                </div>
                <div>
                  <h4>Interests:</h4>
                  <p>Web Development, Photography</p>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default Portfolio;