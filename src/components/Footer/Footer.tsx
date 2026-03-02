import { useNavigate } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerBrand}>
              EVA CEO Evolve
              <span>By EVA Enterprise</span>
            </div>
            <p className={styles.footerDesc}>
              Empowering Visionary Ambition — building your enterprise one SMART solution at a time through expert consulting, coaching, and innovation.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a onClick={() => navigate('/services', { state: { tab: 'coaching' } })}>Coaching</a></li>
              <li><a onClick={() => navigate('/services', { state: { tab: 'bizdev' } })}>Business Development</a></li>
              <li><a onClick={() => navigate('/services', { state: { tab: 'orgdev' } })}>Organizational Development</a></li>
              <li><a onClick={() => navigate('/services', { state: { tab: 'innovation' } })}>Innovation</a></li>
              <li><a onClick={() => navigate('/speaking')}>Speaking</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a onClick={() => navigate('/about', { state: { tab: 'story' } })}>About</a></li>
              <li><a onClick={() => navigate('/about', { state: { tab: 'founder' } })}>Meet the Founder</a></li>
              <li><a onClick={() => navigate('/about', { state: { tab: 'testimonials' } })}>Testimonials</a></li>
              <li><a onClick={() => navigate('/blog')}>Blog</a></li>
              <li><a onClick={() => navigate('/events')}>Events & Shop</a></li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => navigate('/contact')}>Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="https://www.smartsystems2excel.com/" target="_blank" rel="noreferrer">Smart Systems 2 Excel ↗</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 E.V.A. Enterprise, LLC. All Rights Reserved.</span>
          <span>NAICS: 541611 · 541612 · 611430</span>
        </div>
      </div>
    </footer>
  )
}
