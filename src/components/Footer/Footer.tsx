import { useNavigate } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <img
              src={`${import.meta.env.BASE_URL}eva-smart-systems-logo.png`}
              alt="EVA Smart Systems"
              className={styles.footerLogo}
            />
            <div className={styles.footerBrand}>
              Empowerment that Values All
              <span>EVA Smart Systems · Systems to Evolve. Lead. Transform.</span>
            </div>
            <p className={styles.footerDesc}>
              Building your enterprise one SMART solution at a time through innovation and commercialization.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a onClick={() => navigate('/coaching')}>Coaching</a></li>
              <li><a onClick={() => navigate('/consulting')}>Consulting</a></li>
              <li><a onClick={() => navigate('/speaking')}>Speaking</a></li>
              <li><a onClick={() => navigate('/evolve-community')}>EVOLVE Community</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a onClick={() => navigate('/about')}>About</a></li>
              <li><a onClick={() => navigate('/about', { state: { tab: 'founder' } })}>Meet the Founder</a></li>
              <li><a onClick={() => navigate('/events')}>Events</a></li>
              <li><a onClick={() => navigate('/contact')}>Connect</a></li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => navigate('/blog')}>Insights</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 EVA Smart Systems · Empowerment That Values All, LLC. All Rights Reserved.</span>
          <span>NAICS: 541611 · 541612 · 611430</span>
        </div>
      </div>
    </footer>
  )
}
