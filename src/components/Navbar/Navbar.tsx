import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { navItems } from '../../data/nav'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  function handleDropdownClick(path: string, hash?: string) {
    setMobileOpen(false)
    if (hash) {
      navigate(path, { state: { tab: hash } })
    } else {
      navigate(path)
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>
        <button className={styles.navLogo} onClick={() => { navigate('/'); setMobileOpen(false) }}>
          <img
            src={`${import.meta.env.BASE_URL}eva-smart-systems-logo.png`}
            alt="EVA Smart Systems — Systems to Evolve. Lead. Transform."
            className={styles.logoImg}
          />
        </button>

        <ul className={`${styles.navTabs} ${mobileOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <li key={item.path + item.label}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `${styles.navTab} ${item.cta ? styles.navCta : ''} ${isActive ? styles.active : ''}`
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
              {item.dropdown && (
                <div className={styles.dropdownMenu}>
                  {item.dropdown.map((d) => (
                    <a
                      key={d.label}
                      onClick={() => handleDropdownClick(d.path, d.hash)}
                    >
                      {d.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
