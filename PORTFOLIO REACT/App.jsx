import React, { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentCertificate, setCurrentCertificate] = useState(0)
  const [formStatus, setFormStatus] = useState({ message: '', type: '' })

  const audioRef = useRef(null)
  const typingTextRef = useRef(null)
  const particlesInitialized = useRef(false)

  // Typing effect data
  const words = ["Ethical Hacker", "Web Developer", "Cybersecurity Enthusiast", "Technical Writer"]

  // Certificates data
  const certificates = [
    { id: 11, src: "image/sertifikat11.jpg", title: "Hardware Fundamental", year: "2025" },
    { id: 12, src: "image/sertifikat12.jpg", title: "Hardware Fundamental", year: "2025" },
    { id: 1, src: "image/sertifikat1.png", title: "UI/UX Design", year: "2025" },
    { id: 2, src: "image/sertifikat2.png", title: "Web Programming", year: "2025" },
    { id: 3, src: "image/sertifikat3.png", title: "Mobile Application", year: "2025" },
    { id: 4, src: "image/sertifikat4.png", title: "Python Programming", year: "2025" },
    { id: 5, src: "image/sertifikat5.png", title: "Broadcasting", year: "2025" },
    { id: 6, src: "image/sertifikat6.png", title: "Cysec Competition", year: "2025" },
    { id: 7, src: "image/sertifikat7.png", title: "Published Book", year: "2025" },
    { id: 8, src: "image/sertifikat8.png", title: "Best Writer", year: "2025" },
    { id: 9, src: "image/sertifikat9.jpg", title: "PPATK Teaching", year: "2025" },
    { id: 10, src: "image/sertifikat10.jpg", title: "PYJAIL Participant", year: "2025" },
    { id: 13, src: "image/sertifikat13.jpg", title: "LDKS SMPN 9", year: "2025" }
  ]

  // Testimonials data
  const testimonials = [
    {
      text: "Jadilah seperti air putih meskipun tak mewah namun sangat berarti bagi kehidupan.",
      author: "Mahesa Tafriyan",
      role: "Student & Ethical Hacker",
      image: "image/profile.jpg"
    },
    {
      text: "Manusia bisa bahagia dengan prinsip hidup yaitu bersyukur.",
      author: "Mahesa Tafriyan",
      role: "Student & Ethical Hacker",
      image: "image/profile.jpg"
    },
    {
      text: "Being an ethical hacker is like being a digital superhero—silent, skilled, and always alert.",
      author: "Mahesa Tafriyan",
      role: "Student & Ethical Hacker",
      image: "image/profile.jpg"
    },
    {
      text: "Hacking just means building something quickly or testing the boundaries of what can be done.",
      author: "Mark Zuckerberg",
      role: "Founder of Facebook",
      image: "image/mark_zuckerberg.jpg"
    }
  ]

  // Projects data
  const projects = [
    {
      title: "WEB Portfolio",
      description: "Project WEB Portfolio saya tentang data diri saya termasuk project dan sertifikat",
      image: "image/project1.png",
      tags: ["Python", "Bash", "Security"],
      codeLink: "https://mahesatafriyan.netlify.app/",
      demoLink: "#"
    },
    {
      title: "eSeragam-SMKN-1-Probolinggo",
      description: "",
      image: "image/project2.png",
      tags: ["HTML/CSS", "JavaScript", "Python", "JSON"],
      codeLink: "https://github.com/MahesaTafriyan/eSeragam-SMKN-1-Probolinggo.git",
      demoLink: "#"
    },
    {
      title: "Web Toko Kue Coklat",
      description: "",
      image: "image/project3.png",
      tags: ["HTML/CSS", "JavaScript"],
      codeLink: "https://github.com/MahesaTafriyan/Toko_Kue_Coklat.git",
      demoLink: "https://coklatkita.netlify.app/"
    }
  ]

  // Initialize particles.js
  useEffect(() => {
    if (!particlesInitialized.current && window.particlesJS) {
      particlesInitialized.current = true
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#4ea0ff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#4ea0ff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none"
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
          }
        },
        retina_detect: true
      })
    }
  }, [])

  // Typing effect
  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingTimeout

    const typeEffect = () => {
      const currentWord = words[wordIndex]
      
      if (typingTextRef.current) {
        if (isDeleting) {
          typingTextRef.current.textContent = currentWord.substring(0, charIndex - 1)
          charIndex--
        } else {
          typingTextRef.current.textContent = currentWord.substring(0, charIndex + 1)
          charIndex++
        }

        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true
          typingTimeout = setTimeout(typeEffect, 1500)
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false
          wordIndex = (wordIndex + 1) % words.length
          typingTimeout = setTimeout(typeEffect, 500)
        } else {
          typingTimeout = setTimeout(typeEffect, isDeleting ? 50 : 100)
        }
      }
    }

    const timeout = setTimeout(typeEffect, 1000)
    return () => {
      clearTimeout(timeout)
      clearTimeout(typingTimeout)
    }
  }, [])

  // Auto slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Header scroll effect
      const header = document.querySelector('header')
      if (header) {
        if (window.pageYOffset > 50) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }

      // Back to top button
      const backToTop = document.getElementById('back-to-top')
      if (backToTop) {
        if (window.pageYOffset > 300) {
          backToTop.style.opacity = '1'
          backToTop.style.visibility = 'visible'
        } else {
          backToTop.style.opacity = '0'
          backToTop.style.visibility = 'hidden'
        }
      }

      // Animate skill bars
      const skillBars = document.querySelectorAll('.skill-progress')
      skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect()
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          const width = bar.getAttribute('data-width')
          bar.style.width = width + '%'
        }
      })

      // Section reveal animation
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        if (sectionTop < windowHeight * 0.75) {
          section.style.opacity = '1'
          section.style.transform = 'translateY(0)'
        }
      })
    }

    // Initialize sections as hidden
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      section.style.opacity = '0'
      section.style.transform = 'translateY(50px)'
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    })

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Music control
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(console.error)
      }
      setIsMusicPlaying(!isMusicPlaying)
    }
  }

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    
    setFormStatus({ message: 'Sending...', type: 'info' })

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyMQY32W4hx1iP7aOaoXTwyQXjL19Gi2jMGS9B4QMpfgzFqcw3PBeBTtvQ3QNthrDgbEA/exec", {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          comment: formData.get('message')
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()
      
      if (data.status === 'success') {
        setFormStatus({ message: 'Thank you! Your message has been sent successfully.', type: 'success' })
        form.reset()
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      setFormStatus({ message: 'Error: ' + error.message, type: 'error' })
    }

    setTimeout(() => {
      setFormStatus({ message: '', type: '' })
    }, 5000)
  }

  // Lightbox functions
  const openLightbox = (index) => {
    setCurrentCertificate(index)
    setIsLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const nextCertificate = () => {
    setCurrentCertificate(prev => (prev + 1) % certificates.length)
  }

  const prevCertificate = () => {
    setCurrentCertificate(prev => (prev - 1 + certificates.length) % certificates.length)
  }

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="App">
      {/* Particles Background */}
      <div id="particles-js" className="particles-background"></div>

      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="nav-brand">
              <i className="fas fa-code"></i>
              <span>Mahesa</span>
            </div>
            
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              {['home', 'about', 'skills', 'projects', 'sertifikat', 'testimonials', 'contact'].map(section => (
                <a 
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(section)
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
            
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Mahesa Tafriyan</h1>
            <h2 className="hero-subtitle">Ethical Hacker & Web Developer</h2>
            
            <div className="typing-container">
              <span ref={typingTextRef} className="typing-text"></span>
              <span className="cursor">|</span>
            </div>
            
            <p>I am a student passionate about cybersecurity and ethical hacking, dedicated to mastering the art of securing digital systems and networks.</p>
            
            <div className="social-icons">
              {[
                { href: "https://github.com/MahesaTafriyan", icon: "fab fa-github", label: "GitHub" },
                { href: "https://instagram.com/hesaxyz_", icon: "fab fa-instagram", label: "Instagram" },
                { href: "https://twitter.com/MahesaTafriyan", icon: "fab fa-twitter", label: "Twitter" },
                { href: "https://www.tiktok.com/@_g4mm4_", icon: "fab fa-tiktok", label: "TikTok" },
                { href: "https://www.quora.com/profile/Mahesa-Tafriyan", icon: "fab fa-quora", label: "Quora" }
              ].map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            
            <button 
              className="btn btn-accent"
              onClick={() => scrollToSection('about')}
            >
              Explore My Journey
            </button>
          </div>
          
          <a 
            href="#about" 
            className="scroll-down"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('about')
            }}
          >
            <span>Scroll Down</span>
            <i className="fas fa-chevron-down"></i>
          </a>
        </section>

        {/* Background Music */}
        <audio ref={audioRef} loop>
          <source src="https://audio.jukehost.co.uk/3zSuO7gzj112WxVVESvTjquXNfY7nGaT" type="audio/mpeg" />
          Browser Anda tidak mendukung elemen audio.
        </audio>

        {/* Music Control */}
        <div 
          className={`music-control ${isMusicPlaying ? 'playing' : ''}`}
          onClick={toggleMusic}
        >
          <i className="fas fa-music"></i>
          <span>Music</span>
        </div>

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About <span className="text-gradient">Me</span></h2>
            </div>
            
            <div className="about-content">
              <div className="about-image float">
                <img src="image/profile.jpg" alt="Mahesa Tafriyan" loading="lazy" />
              </div>
              
              <div className="about-text">
                <h3>Cybersecurity Enthusiast from Probolinggo</h3>
                <p>I am a student at SMK Negeri 1 Probolinggo majoring in Software Engineering (RPL). My journey in technology began with a curiosity about how systems work, which evolved into a passion for cybersecurity and ethical hacking.</p>
                <p>Currently, I'm focused on mastering penetration testing techniques, network security fundamentals, and secure coding practices. I believe in continuous learning and regularly participate in cybersecurity competitions and capture-the-flag (CTF) challenges to hone my skills.</p>
                
                <div className="skills-list">
                  {['Ethical Hacking', 'Web Development', 'Penetration Testing', 'Technical Writing'].map(skill => (
                    <div key={skill} className="skill-item">
                      <i className="fas fa-check-circle"></i>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="btn"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <div className="container">
            <div className="section-title">
              <h2>My <span className="text-gradient">Skills</span></h2>
            </div>
            
            <div className="skills-grid">
              {/* Technical Skills */}
              <div className="skill-category card">
                <h3><i className="fas fa-laptop-code"></i> Technical Skills</h3>
                {[
                  { name: 'Ethical Hacking', percent: 50 },
                  { name: 'Web Development', percent: 40 },
                  { name: 'Python Programming', percent: 60 },
                  { name: 'Network Security', percent: 30 }
                ].map(skill => (
                  <div key={skill.name} className="skill">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-width={skill.percent}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Cybersecurity Skills */}
              <div className="skill-category card">
                <h3><i className="fas fa-shield-alt"></i> Cybersecurity</h3>
                {[
                  { name: 'Penetration Testing', percent: 40 },
                  { name: 'Vulnerability Assessment', percent: 25 },
                  { name: 'OSINT', percent: 30 },
                  { name: 'Digital Forensics', percent: 10 }
                ].map(skill => (
                  <div key={skill.name} className="skill">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-width={skill.percent}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Creative Skills */}
              <div className="skill-category card">
                <h3><i className="fas fa-paint-brush"></i> Creative Skills</h3>
                {[
                  { name: 'Technical Writing', percent: 80 },
                  { name: 'Presentation Design', percent: 85 },
                  { name: 'Creative Writing', percent: 80 },
                  { name: 'Public Speaking', percent: 75 }
                ].map(skill => (
                  <div key={skill.name} className="skill">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-width={skill.percent}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <div className="container">
            <div className="section-title">
              <h2>My <span className="text-gradient">Projects</span></h2>
            </div>
            
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-item card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    {project.description && <p>{project.description}</p>}
                    <div className="project-tags">
                      {project.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                        View Code
                      </a>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="sertifikat" className="certificates">
          <div className="container">
            <div className="section-title">
              <h2>My <span className="text-gradient">Certificates</span></h2>
            </div>

            <div className="certificates-container">
              {certificates.map((cert, index) => (
                <div 
                  key={cert.id} 
                  className="certificate-item card"
                  onClick={() => openLightbox(index)}
                >
                  <img src={cert.src} alt={cert.title} loading="lazy" />
                  <div className="certificate-overlay">
                    <h3 className="certificate-title">{cert.title}</h3>
                    <p className="certificate-date">Issued: {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {isLightboxOpen && (
          <div className="lightbox active" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
              <img src={certificates[currentCertificate].src} alt="Certificate Preview" />
              <div className="lightbox-nav">
                <button className="lightbox-prev" onClick={prevCertificate}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="lightbox-next" onClick={nextCertificate}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-title">
              <h2>Words of <span className="text-gradient">Wisdom</span></h2>
            </div>
            
            <div className="testimonials-container">
              <div className="testimonial-slider">
                <div 
                  className="testimonial-track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item card">
                      <div className="testimonial-text">
                        <p>{testimonial.text}</p>
                      </div>
                      <div className="testimonial-author">
                        <img src={testimonial.image} alt={testimonial.author} loading="lazy" />
                        <div className="author-info">
                          <h4>{testimonial.author}</h4>
                          <p>{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="testimonial-nav">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`testimonial-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Get In <span className="text-gradient">Touch</span></h2>
            </div>
            
            <div className="contact-container">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <a href="mailto:mahesatafrian@gmail.com">mahesatafrian@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Location</h3>
                    <p>Probolinggo, East Java, Indonesia</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Education</h3>
                    <p>SMK Negeri 1 Probolinggo</p>
                    <p>Software Engineering (RPL)</p>
                  </div>
                </div>
                
                <div className="social-icons">
                  {[
                    { href: "https://github.com/MahesaTafriyan", icon: "fab fa-github", label: "GitHub" },
                    { href: "https://instagram.com/hesaxyz_", icon: "fab fa-instagram", label: "Instagram" },
                    { href: "https://twitter.com/MahesaTafriyan", icon: "fab fa-twitter", label: "Twitter" },
                    { href: "https://www.tiktok.com/@_g4mm4_", icon: "fab fa-tiktok", label: "TikTok" }
                  ].map(social => (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="contact-form card">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                  
                  <button type="submit" className="form-submit">
                    <span>Send Message</span>
                  </button>
                  
                  {formStatus.message && (
                    <div className={`form-status ${formStatus.type}`}>
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <a 
              href="#home" 
              className="footer-logo"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
            >
              Mahesa
            </a>
            
            <div className="footer-links">
              {['home', 'about', 'skills', 'projects', 'sertifikat', 'contact'].map(section => (
                <a 
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(section)
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
            
            <div className="footer-social">
              {[
                { href: "https://github.com/MahesaTafriyan", icon: "fab fa-github", label: "GitHub" },
                { href: "https://instagram.com/hesaxyz_", icon: "fab fa-instagram", label: "Instagram" },
                { href: "https://twitter.com/MahesaTafriyan", icon: "fab fa-twitter", label: "Twitter" },
                { href: "https://www.tiktok.com/@_g4mm4_", icon: "fab fa-tiktok", label: "TikTok" }
              ].map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            
            <p className="copyright">&copy; 2025 Mahesa Tafriyan. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a 
        href="#home" 
        id="back-to-top"
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('home')
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  )
}

export default App