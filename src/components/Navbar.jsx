import './Navbar.css'

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'overview', label: 'Overview' },
    { id: 'contact', label: 'Contact Us' },
  ]

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => setActiveTab('home')}>
          <div className="brand-logo">N</div>
          <span className="brand-name">NavbarApp</span>
        </div>

        <nav className="navbar-nav">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = activeTab === item.id
              return (
                <li key={item.id} className="nav-item-wrapper">
                  <button
                    type="button"
                    className={`nav-button ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    {item.label}
                    {isActive && <span className="active-dot" />}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
