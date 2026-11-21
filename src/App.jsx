import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleContactSubmit = (e) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.email || !contactForm.message) return
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setContactForm({ name: '', email: '', message: '' })
    }, 4000)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="page-card">
            <div className="page-header">
              <span className="badge badge-home">Home Page</span>
              <h1 className="page-title">Welcome to the Home Page</h1>
              <p className="page-subtitle">
                A simple and elegant React navigation bar demonstration. Select any tab above to see the selected color highlight in action.
              </p>
            </div>

            <div className="cards-grid">
              <div className="info-card">
                <span className="info-card-icon">🚀</span>
                <h3 className="info-card-title">Clean & Modern</h3>
                <p className="info-card-desc">
                  Minimalist and responsive user interface built using modern React components and CSS.
                </p>
              </div>

              <div className="info-card">
                <span className="info-card-icon">🎨</span>
                <h3 className="info-card-title">Active Tab Indicator</h3>
                <p className="info-card-desc">
                  The active navigation link is dynamically highlighted with a distinct vibrant color and active indicator.
                </p>
              </div>

              <div className="info-card">
                <span className="info-card-icon">⚡</span>
                <h3 className="info-card-title">Fast Navigation</h3>
                <p className="info-card-desc">
                  Instant tab switching with smooth transitions and state-driven page updates.
                </p>
              </div>
            </div>
          </div>
        )

      case 'about':
        return (
          <div className="page-card">
            <div className="page-header">
              <span className="badge badge-about">About Page</span>
              <h1 className="page-title">About Us</h1>
              <p className="page-subtitle">
                Learn more about our purpose, mission, and the principles that guide our work.
              </p>
            </div>

            <div className="cards-grid">
              <div className="info-card">
                <span className="info-card-icon">🎯</span>
                <h3 className="info-card-title">Our Mission</h3>
                <p className="info-card-desc">
                  To build intuitive, clean, and accessible web experiences that make navigation effortless.
                </p>
              </div>

              <div className="info-card">
                <span className="info-card-icon">💡</span>
                <h3 className="info-card-title">Our Vision</h3>
                <p className="info-card-desc">
                  Empowering web developers with modular, maintainable, and visually appealing component design.
                </p>
              </div>

              <div className="info-card">
                <span className="info-card-icon">🤝</span>
                <h3 className="info-card-title">Our Values</h3>
                <p className="info-card-desc">
                  Simplicity, clarity, responsive design, and user-first interactivity.
                </p>
              </div>
            </div>
          </div>
        )

      case 'overview':
        return (
          <div className="page-card">
            <div className="page-header">
              <span className="badge badge-overview">Overview Page</span>
              <h1 className="page-title">Project Overview</h1>
              <p className="page-subtitle">
                Here is a summary of the navigation structure, application metrics, and features.
              </p>
            </div>

            <div className="stats-row">
              <div className="stat-box">
                <div className="stat-number">4</div>
                <div className="stat-label">Navigation Tabs</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">100%</div>
                <div className="stat-label">Responsive Layout</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">React 19</div>
                <div className="stat-label">Modern Framework</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">0ms</div>
                <div className="stat-label">Instant Tab Switch</div>
              </div>
            </div>

            <div className="cards-grid">
              <div className="info-card">
                <span className="info-card-icon">🧭</span>
                <h3 className="info-card-title">4 Tab Destinations</h3>
                <p className="info-card-desc">
                  Home, About, Overview, and Contact Us each provide distinct views and content.
                </p>
              </div>

              <div className="info-card">
                <span className="info-card-icon">✨</span>
                <h3 className="info-card-title">Visual Active Distinction</h3>
                <p className="info-card-desc">
                  Active button stands out with high-contrast colored background, white text, and a glowing dot.
                </p>
              </div>

              <div className="info-card">
                <span className="info-card-icon">📱</span>
                <h3 className="info-card-title">Mobile Ready</h3>
                <p className="info-card-desc">
                  Fluid design adapts gracefully to phones, tablets, and desktop displays.
                </p>
              </div>
            </div>
          </div>
        )

      case 'contact':
        return (
          <div className="page-card">
            <div className="page-header">
              <span className="badge badge-contact">Contact Page</span>
              <h1 className="page-title">Contact Us</h1>
              <p className="page-subtitle">
                Have questions or need assistance? Fill out the form or reach out via our contact details.
              </p>
            </div>

            <div className="contact-layout">
              <div className="contact-form-container">
                {isSubmitted && (
                  <div className="feedback-alert" style={{ marginBottom: '16px' }}>
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}
                <form onSubmit={handleContactSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Write your message here..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="contact-info-container">
                <h3>Get In Touch</h3>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <span className="contact-icon">📧</span>
                    <div className="contact-info-text">
                      <strong>Email</strong>
                      <span>support@example.com</span>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <span className="contact-icon">📞</span>
                    <div className="contact-info-text">
                      <strong>Phone</strong>
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <span className="contact-icon">📍</span>
                    <div className="contact-info-text">
                      <strong>Location</strong>
                      <span>123 Innovation Drive, Tech City, USA</span>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <span className="contact-icon">⏰</span>
                    <div className="contact-info-text">
                      <strong>Office Hours</strong>
                      <span>Monday – Friday, 9:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderContent()}
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} NavbarApp. Simple 4-page navigation demo.</p>
      </footer>
    </div>
  )
}

export default App
