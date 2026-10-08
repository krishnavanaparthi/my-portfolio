import "./App.css";
import profileImage from "./assets/profile.png";
import React, { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          LAKSHMI
          <br />
          KRISHNA
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          ☰
        </button>

        <div className={menuOpen ? "nav-links active" : "nav-links"}>

          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>

          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#certifications" onClick={() => setMenuOpen(false)}>
            Certifications
          </a>

          <a href="#achievements" onClick={() => setMenuOpen(false)}>
            Achievements
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-content">

        <p className="greeting">
          Hi, I'm Lakshmi Krishna Vanaparthi 👋
        </p>

        <h1>
          AI/ML Student
          <br />
          <span>& AI/ML ENGINEER | DEVELOPER</span>
        </h1>

        <p className="hero-description">
          <p className="hero-description">
            Computer Science and Engineering student specializing in
            Artificial Intelligence and Machine Learning, passionate about
            Data Analytics, AI/ML and building practical technology solutions.
</p>
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            Resume ↗
          </a>

        </div>

          <div className="social-links">
            <a
              href="https://github.com/krishnavanaparthi"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/krishnavanaparthi"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:krishnavanaparthi30@gmail.com">
              Email
            </a>
          </div>

        </div>

        <div className="hero-image">

          <div className="profile-circle">
             <img src={profileImage} alt="Krishna" />
          </div>

        </div>

      </section>

      {/* Temporary Sections */}

      <section id="about" className="about-section">

  <div className="section-heading">
    <p>GET TO KNOW ME</p>
    <h2>About Me</h2>
  </div>

  <div className="about-container">

    <div className="about-text">

      <h3>
        Building my career with
        <span> AI, Data & Technology.</span>
      </h3>

      <p>
        I'm Lakshmi Krishna Vanaparthi, an undergraduate student at
        Malla Reddy College of Engineering & Technology, specializing
        in Computer Science with Artificial Intelligence and Machine Learning.      </p>

      <p>
        I'm passionate about Artificial Intelligence, Machine Learning,
        Data Analysis and software development. I enjoy transforming
        real-world problems into practical technology solutions.
      </p>

      <p>
        I have gained practical experience through my Data Analyst
        internship at Bluestock and currently contribute to student
        technology communities as a Google Student Ambassador.
      </p>

      <div className="about-highlights">

        <div className="about-card">
          <div className="about-icon">🤖</div>
          <div>
            <h4>AI & ML</h4>
            <p>Building intelligent solutions</p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-icon">💻</div>
          <div>
            <h4>Development</h4>
            <p>Web & Real-world applications</p>
          </div>
        </div>

        <div className="about-card">
          <div className="about-icon">🚀</div>
          <div>
            <h4>Problem Solving</h4>
            <p>Turning ideas into products</p>
          </div>
        </div>

      </div>

    </div>

    <div className="about-info">

    <div className="info-item">
      <span>🎓</span>
      <div>
        <small>Education</small>
        <strong>B.Tech CSE – AI & ML</strong>
      </div>
    </div>

    <div className="info-item">
      <span>🤖</span>
      <div>
        <small>Specialization</small>
        <strong>Artificial Intelligence & Machine Learning</strong>
      </div>
    </div>

    <div className="info-item">
      <span>📊</span>
      <div>
        <small>Experience</small>
        <strong>Data Analyst Intern · Bluestock</strong>
      </div>
    </div>

    <div className="info-item">
      <span>🌐</span>
      <div>
        <small>Community</small>
        <strong>Google Student Ambassador</strong>
      </div>
    </div>
    </div>

  </div>

</section>

{/* Experience Section */}
<section id="experience" className="experience-section">

  <div className="section-heading">
    <p>MY PROFESSIONAL JOURNEY</p>
    <h2>Experience</h2>
  </div>

  <div className="experience-container">

    {/* Google Student Ambassador */}
    <div className="experience-card">

      <div className="experience-icon">
        🌐
      </div>

      <div className="experience-content">

        <div className="experience-header">
          <div>
            <h3>Google Student Ambassador</h3>
            <p className="company">Google</p>
          </div>

          <span className="experience-date">
            May 2026 – Present
          </span>
        </div>

        <p className="experience-description">
          Selected as a Google Student Ambassador, contributing to
          student technology communities, campus activities,
          communication, outreach and technology awareness.
        </p>

        <div className="experience-tags">
          <span>Communication</span>
          <span>Community</span>
          <span>Leadership</span>
          <span>Technology</span>
        </div>

      </div>

    </div>


    {/* Bluestock */}
    <div className="experience-card">

      <div className="experience-icon">
        📊
      </div>

      <div className="experience-content">

        <div className="experience-header">
          <div>
            <h3>Data Analyst Intern</h3>
            <p className="company">Bluestock</p>
          </div>

          <span className="experience-date">
            May 2026 – Aug 2026
          </span>
        </div>

        <p className="experience-description">
          Worked on data analysis and exploratory data analysis,
          gaining practical experience in analyzing datasets,
          identifying patterns and extracting meaningful insights.
        </p>

        <div className="experience-tags">
          <span>Data Analysis</span>
          <span>Exploratory Data Analysis</span>
          <span>Python</span>
          <span>SQL</span>
        </div>

      </div>

    </div>

  </div>

</section>

{/* Education Section */}
<section id="education" className="education-section">

  <div className="section-heading">
    <p>MY ACADEMIC JOURNEY</p>
    <h2>Education</h2>
  </div>

  <div className="education-container">

    {/* B.Tech */}
    <div className="education-card">

      <div className="education-year">
        2023
        <span>2027</span>
      </div>

      <div className="education-line">
        <div className="education-dot"></div>
      </div>

      <div className="education-content">

        <div className="education-top">
          <div>
            <h3>
              B.Tech – Computer Science & Engineering
            </h3>

            <h4>
              Artificial Intelligence & Machine Learning
            </h4>

            <p className="education-institute">
              Malla Reddy College of Engineering & Technology
            </p>
          </div>

          <span className="education-status">
            Currently Pursuing
          </span>
        </div>

        <p className="education-description">
          Specializing in Artificial Intelligence and Machine
          Learning with a focus on programming, data analysis,
          machine learning, databases and software development.
        </p>

        <div className="education-details">
          <span>📅 Sep 2023 – May 2027</span>
          <span>📊 Grade: 80%</span>
          <span>🤖 CSE – AI & ML</span>
        </div>

      </div>

    </div>


    {/* Intermediate */}
    <div className="education-card">

      <div className="education-year">
        2021
        <span>2023</span>
      </div>

      <div className="education-line">
        <div className="education-dot"></div>
      </div>

      <div className="education-content">

        <div className="education-top">
          <div>
            <h3>Intermediate – Mathematics</h3>

            <p className="education-institute">
              Keshala Junior College
            </p>
          </div>

          <span className="education-status completed">
            Completed
          </span>
        </div>

        <div className="education-details">
          <span>📅 Aug 2021 – Mar 2023</span>
          <span>📊 Grade: 94.3%</span>
        </div>

      </div>

    </div>


    {/* School */}
    <div className="education-card">

      <div className="education-year">
        2014
        <span>2021</span>
      </div>

      <div className="education-line">
        <div className="education-dot"></div>
      </div>

      <div className="education-content">

        <div className="education-top">
          <div>
            <h3>Higher Secondary Education</h3>

            <p className="education-institute">
              Brahmani Vidyalayamu
            </p>
          </div>

          <span className="education-status completed">
            Completed
          </span>
        </div>

        <div className="education-details">
          <span>📊 Grade: 100%</span>
          <span>🏏 Activities: Cricket, Volleyball</span>
        </div>

      </div>

    </div>

  </div>

</section>
{/* Skills Section */}
<section id="skills" className="skills-section">

  <div className="section-heading">
    <p>WHAT I WORK WITH</p>
    <h2>Technical Skills</h2>
  </div>

  <div className="skills-container">

    {/* Programming */}
    <div className="skill-category">

      <div className="skill-category-header">
        <div className="skill-category-icon">💻</div>

        <div>
          <h3>Programming</h3>
          <p>Languages I use to build solutions</p>
        </div>
      </div>

      <div className="skill-list">
        <span>Python</span>
        <span>Java</span>
        <span>C</span>
        <span>C++</span>
      </div>

    </div>


    {/* AI / ML */}
    <div className="skill-category">

      <div className="skill-category-header">
        <div className="skill-category-icon">🤖</div>

        <div>
          <h3>AI & Machine Learning</h3>
          <p>Intelligent systems and models</p>
        </div>
      </div>

      <div className="skill-list">
        <span>Artificial Intelligence</span>
        <span>Machine Learning</span>
        <span>Deep Learning</span>
        <span>NLP</span>
        <span>Computer Vision</span>
      </div>

    </div>


    {/* Data */}
    <div className="skill-category">

      <div className="skill-category-header">
        <div className="skill-category-icon">📊</div>

        <div>
          <h3>Data Analytics</h3>
          <p>Working with data and insights</p>
        </div>
      </div>

      <div className="skill-list">
        <span>Data Analysis</span>
        <span>Exploratory Data Analysis</span>
        <span>SQL</span>
        <span>Databases</span>
      </div>

    </div>


    {/* Web Development */}
    <div className="skill-category">

      <div className="skill-category-header">
        <div className="skill-category-icon">🌐</div>

        <div>
          <h3>Web Development</h3>
          <p>Building modern web applications</p>
        </div>
      </div>

      <div className="skill-list">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Node.js</span>
      </div>

    </div>


    {/* Mobile */}
    <div className="skill-category">

      <div className="skill-category-header">
        <div className="skill-category-icon">📱</div>

        <div>
          <h3>Mobile Development</h3>
          <p>Cross-platform application development</p>
        </div>
      </div>

      <div className="skill-list">
        <span>Flutter</span>
        <span>Dart</span>
      </div>

    </div>


    {/* Tools */}
    <div className="skill-category">

      <div className="skill-category-header">
        <div className="skill-category-icon">⚙️</div>

        <div>
          <h3>Tools & Technologies</h3>
          <p>Tools I use in development</p>
        </div>
      </div>

      <div className="skill-list">
        <span>Git</span>
        <span>GitHub</span>
        <span>MongoDB</span>
        <span>Firebase</span>
        <span>VS Code</span>
      </div>

    </div>

  </div>

</section>

{/* Projects Section */}
<section id="projects" className="projects-section">

  <div className="section-heading">
    <p>WHAT I'VE BUILT</p>
    <h2>Featured Projects</h2>
  </div>

  <p className="projects-intro">
    A selection of projects where I apply AI, machine learning,
    data analytics and software development to solve practical
    problems.
  </p>

  <div className="projects-container">

    {/* Project 1 */}
    <div className="project-card">

      <div className="project-image agriculture-image">
        <span>🌾</span>
      </div>

      <div className="project-content">

        <div className="project-number">
          01
        </div>

        <h3>KrishiCare AI</h3>

        <p>
          An AI-powered agricultural assistant designed to help
          farmers identify crop diseases and receive practical
          guidance for fertilizer usage and disease prevention.
        </p>

        <div className="project-tech">
          <span>AI / ML</span>
          <span>Computer Vision</span>
          <span>Flutter</span>
          <span>Firebase</span>
        </div>

        <div className="project-links">
          <a href="#" className="project-button">
            GitHub ↗
          </a>

          <a href="#" className="project-button secondary">
            Live Demo ↗
          </a>
        </div>

      </div>

    </div>


    {/* Project 2 */}
    <div className="project-card">

      <div className="project-image farmer-image">
        <span>🌱</span>
      </div>

      <div className="project-content">

        <div className="project-number">
          02
        </div>

        <h3>Friendly Farmer</h3>

        <p>
          A multilingual Flutter application designed for farmers
          to select crops, upload or capture plant images, use voice
          input and receive AI-based crop disease assistance.
        </p>

        <div className="project-tech">
          <span>Flutter</span>
          <span>Dart</span>
          <span>AI / ML</span>
          <span>Firebase</span>
        </div>

        <div className="project-links">
          <a href="#" className="project-button">
            GitHub ↗
          </a>

          <a href="#" className="project-button secondary">
            Details ↗
          </a>
        </div>

      </div>

    </div>


    {/* Project 3 */}
    <div className="project-card">

      <div className="project-image finance-image">
        <span>💰</span>
      </div>

      <div className="project-content">

        <div className="project-number">
          03
        </div>

        <h3>Finance Tracker</h3>

        <p>
          A full-stack personal finance application for managing
          transactions, categories and budgets, with interactive
          dashboards and financial charts.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Chart.js</span>
        </div>

        <div className="project-links">
          <a href="#" className="project-button">
            GitHub ↗
          </a>

          <a href="#" className="project-button secondary">
            Live Demo ↗
          </a>
        </div>

      </div>

    </div>


    {/* Project 4 */}
    <div className="project-card">

      <div className="project-image city-image">
        <span>🏙️</span>
      </div>

      <div className="project-content">

        <div className="project-number">
          04
        </div>

        <h3>CityFix AI</h3>

        <p>
          An AI-focused civic technology concept designed to help
          identify and manage urban issues and connect reported
          problems with technology-driven solutions.
        </p>

        <div className="project-tech">
          <span>AI</span>
          <span>Machine Learning</span>
          <span>Web Development</span>
        </div>

        <div className="project-links">
          <a href="#" className="project-button">
            GitHub ↗
          </a>

          <a href="#" className="project-button secondary">
            Live Demo ↗
          </a>
        </div>

      </div>

    </div>

  </div>

</section>
{/* Certifications Section */}
<section id="certifications" className="certifications-section">

  <div className="section-heading">
    <p>MY ACHIEVEMENTS</p>
    <h2>Certifications</h2>
  </div>

  <p className="certifications-intro">
    Certifications and learning achievements that support my
    technical and professional development.
  </p>

  <div className="certifications-container">

    {/* Certification 1 */}
    <div className="certificate-card">

      <div className="certificate-icon">
        🏆
      </div>

      <div className="certificate-content">

        <span className="certificate-type">
          Web Development
        </span>

        <h3>Responsive Web Design</h3>

        <p className="certificate-issuer">
          freeCodeCamp
        </p>

        <p className="certificate-description">
          Demonstrated knowledge of responsive web design,
          HTML, CSS and modern web development principles.
        </p>

        <a href="#" className="certificate-link">
          View Certificate ↗
        </a>

      </div>

    </div>


    {/* Certification 2 */}
    <div className="certificate-card">

      <div className="certificate-icon">
        🧠
      </div>

      <div className="certificate-content">

        <span className="certificate-type">
          Quiz / Achievement
        </span>

        <h3>QuizOff 2026</h3>

        <p className="certificate-issuer">
          CampusCrew
        </p>

        <p className="certificate-description">
          Certificate of participation in the Main Quiz
          consisting of 15 questions.
        </p>

        <a href="#" className="certificate-link">
          View Certificate ↗
        </a>

      </div>

    </div>


    {/* Certification 3 */}
    <div className="certificate-card">

      <div className="certificate-icon">
        📚
      </div>

      <div className="certificate-content">

        <span className="certificate-type">
          Online Learning
        </span>

        <h3>Professional Course</h3>

        <p className="certificate-issuer">
          Coursera
        </p>

        <p className="certificate-description">
          Online learning certification supporting continuous
          professional and technical development.
        </p>

        <a href="#" className="certificate-link">
          View Certificate ↗
        </a>

      </div>

    </div>


    {/* Certification 4 */}
    <div className="certificate-card">

      <div className="certificate-icon">
        🎓
      </div>

      <div className="certificate-content">

        <span className="certificate-type">
          Professional Development
        </span>

        <h3>Professional Certification</h3>

        <p className="certificate-issuer">
          Cambridge University Press & Assessment
        </p>

        <p className="certificate-description">
          Professional learning and assessment achievement.
        </p>

        <a href="#" className="certificate-link">
          View Certificate ↗
        </a>

      </div>

    </div>

  </div>

</section>

<section id="education" className="education-section">

  <div className="section-heading">
    <p>MY JOURNEY</p>
    <h2>Education & Experience</h2>
  </div>

  <div className="timeline">

    {/* Education */}
    <div className="timeline-item">

      <div className="timeline-dot">
        🎓
      </div>

      <div className="timeline-content">

        <span className="timeline-date">
          2023 — Present
        </span>

        <h3>B.Tech — Computer Science & Engineering</h3>

        <h4>
          Artificial Intelligence & Machine Learning
        </h4>

        <p>
          Currently pursuing my Bachelor's degree in Computer
          Science and Engineering with a specialization in
          Artificial Intelligence and Machine Learning.
        </p>

        <div className="timeline-tags">
          <span>AI & ML</span>
          <span>Computer Science</span>
          <span>Software Development</span>
        </div>

      </div>

    </div>


    {/* Project Experience */}
    <div className="timeline-item">

      <div className="timeline-dot">
        🚀
      </div>

      <div className="timeline-content">

        <span className="timeline-date">
          2025 — Present
        </span>

        <h3>AI & Software Development Projects</h3>

        <h4>
          Independent Developer
        </h4>

        <p>
          Developed AI-powered and full-stack applications
          including agricultural AI solutions, finance management
          systems and civic problem-solving applications.
        </p>

        <div className="timeline-tags">
          <span>AI/ML</span>
          <span>React</span>
          <span>Flutter</span>
          <span>Node.js</span>
        </div>

      </div>

    </div>


    {/* Google Student Ambassador */}
    <div className="timeline-item">

      <div className="timeline-dot">
        🌐
      </div>

      <div className="timeline-content">

        <span className="timeline-date">
          Experience
        </span>

        <h3>Google Student Ambassador</h3>

        <h4>
          Student Community & Technology
        </h4>

        <p>
          Participated in student-focused technology initiatives,
          campus activities and technology awareness programs,
          helping students explore modern tools and technologies.
        </p>

        <div className="timeline-tags">
          <span>Community</span>
          <span>Technology</span>
          <span>Leadership</span>
        </div>

      </div>

    </div>

  </div>

</section>
<section id="achievements" className="achievements-section">

  <div className="section-heading">
    <p>MY ACHIEVEMENTS</p>
    <h2>Achievements & Certifications</h2>
  </div>

  <div className="achievements-container">

    {/* Google Student Ambassador */}
    <div className="achievement-card">

      <div className="achievement-icon">
        🌐
      </div>

      <div className="achievement-content">

        <span className="achievement-type">
          Leadership & Community
        </span>

        <h3>Google Student Ambassador</h3>

        <p>
          Selected as a Google Student Ambassador and participated
          in technology-focused student activities, campus
          engagement and awareness initiatives.
        </p>

      </div>

    </div>


    {/* Hackathons */}
    <div className="achievement-card">

      <div className="achievement-icon">
        🏆
      </div>

      <div className="achievement-content">

        <span className="achievement-type">
          Competitions
        </span>

        <h3>Hackathons & Project Competitions</h3>

        <p>
          Participated in technology and AI-focused hackathons,
          developing practical solutions to real-world problems
          using modern technologies.
        </p>

      </div>

    </div>


    {/* Certifications */}
    <div className="achievement-card">

      <div className="achievement-icon">
        📜
      </div>

      <div className="achievement-content">

        <span className="achievement-type">
          Certifications
        </span>

        <h3>Technical Certifications</h3>

        <p>
          Completed technical learning and certification programs
          related to Artificial Intelligence, Machine Learning,
          programming and software development.
        </p>

      </div>

    </div>


    {/* Projects */}
    <div className="achievement-card">

      <div className="achievement-icon">
        🚀
      </div>

      <div className="achievement-content">

        <span className="achievement-type">
          Projects
        </span>

        <h3>AI & Software Projects</h3>

        <p>
          Built multiple applications including agricultural AI,
          finance management and civic technology solutions,
          combining AI with modern software development.
        </p>

      </div>

    </div>

  </div>

</section>

{/* Contact Section */}
{/* Contact Section */}
<section id="contact" className="contact-section">

  <div className="section-heading">
    <p>LET'S CONNECT</p>
    <h2>Get In Touch</h2>
  </div>

  <div className="contact-container">

    {/* Contact Information */}
    <div className="contact-info">

      <h3>
        Let's build something
        <span> meaningful.</span>
      </h3>

      <p>
        I'm always interested in connecting with people,
        discussing technology, exploring opportunities and
        working on interesting projects.
      </p>

      <div className="contact-details">

        <a
          href="mailto:krishnavanaparthi30@gmail.com"
          className="contact-item"
        >
          <div className="contact-icon">✉️</div>

          <div>
            <small>Email</small>
            <strong>krishnavanaparthi30@gmail.com</strong>
          </div>
        </a>


        <a
          href="www.linkedin.com/in/krishnavanaparthi"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <div className="contact-icon">💼</div>

          <div>
            <small>LinkedIn</small>
            <strong>View my LinkedIn</strong>
          </div>
        </a>


        <a
          href="https://github.com/krishnavanaparthi"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <div className="contact-icon">💻</div>

          <div>
            <small>GitHub</small>
            <strong>View my GitHub</strong>
          </div>
        </a>

      </div>

    </div>


    {/* Contact Form */}
    <div className="contact-form">

      <form  
        action="https://formspree.io/f/xjygwowa"
        method="POST"
        acceptCharset="UTF-8"
      >

        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </div>


        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
          />
        </div>


        <div className="form-group">
          <label>Message</label>

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>


        <button type="submit" className="contact-button">
          Send Message ↗
        </button>

      </form>

    </div>

  </div>

</section>

{/* Footer */}
<footer className="footer">

  <div className="footer-content">

    <div className="footer-brand">
      <h3>KRISHNA</h3>

      <p>
        AI/ML Student • Data Analyst • Developer
      </p>
    </div>


    <div className="footer-links">

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

    </div>


    <div className="footer-socials">

      <a
        href="https://github.com/krishnavanaparthi"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        href="www.linkedin.com/in/krishnavanaparthi"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>

      <a href="mailto:krishnavanaparthi30@gmail.com">
        Email
      </a>

    </div>

  </div>


  <div className="footer-bottom">

    <p>
      © 2026 Vanaparthi Lakshmi Krishna. All rights reserved.
    </p>

    <p>
      Built with React & ❤️
    </p>

  </div>

</footer>

    </div>
  );
}

export default App;