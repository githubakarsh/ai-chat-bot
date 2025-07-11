import { useState } from 'react'
import logo from '../assets/react.svg'
import './Header.css'

function Header({ onMenuClick }) {
  const [active, setActive] = useState('Home')
  const menuItems = ['Home', 'Features', 'Pricing', 'Contact']

  return (
    <header className="app-header">
      <div className="left-group">
        <button className="menu-button" onClick={onMenuClick} aria-label="Toggle sidebar">
          ☰
        </button>
        <div className="logo-wrapper">
          <img src={logo} alt="AI Chat Bot Logo" />
          <span className="logo-text">AI Chat Bot</span>
        </div>
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item}>
              <button
                className={active === item ? 'nav-item active' : 'nav-item'}
                onClick={() => setActive(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="user-icon" title="User">
        User
      </div>
    </header>
  )
}

export default Header
