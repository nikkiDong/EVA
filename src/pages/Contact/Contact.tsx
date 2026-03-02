import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'

const serviceOptions = [
  'Executive Coaching',
  'Workforce Development Coaching',
  'Business Development',
  'Organizational Development',
  'Innovation & M.O.V.E.-U Lab™',
  'Speaking / Workshop',
  'Evolve 2026 Events',
  'Membership',
  'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', service: '', message: '' })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setForm({ firstName: '', lastName: '', email: '', service: '', message: '' })
  }

  return (
    <div className={styles.contactPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <div className="section-label">Get in Touch</div>
          <h2 className="section-title">Let's Build Your Next Chapter</h2>
          <p className="section-subtitle">Schedule a complimentary consultation to see how EVA CEO Evolve can help transform your business.</p>
        </div>

        <div className={styles.contactGrid}>
          <div>
            <p className={styles.introText}>
              Whether you're exploring coaching, looking to develop your organization, or ready to register for an Evolve 2026 event — we'd love to hear from you. Let's start a conversation about your goals.
            </p>
            <div className={styles.contactDetail}>
              <div className={styles.contactIcon}>📧</div>
              <div><h4>Email</h4><p>info@evaceoevolve.com</p></div>
            </div>
            <div className={styles.contactDetail}>
              <div className={styles.contactIcon}>📱</div>
              <div><h4>Phone</h4><p>(555) 123-4567</p></div>
            </div>
            <div className={styles.contactDetail}>
              <div className={styles.contactIcon}>📍</div>
              <div><h4>Location</h4><p>Virtual & In-Person Consulting Available</p></div>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} title="LinkedIn">in</a>
              <a href="#" className={styles.socialLink} title="Facebook">f</a>
              <a href="#" className={styles.socialLink} title="Instagram">ig</a>
              <a href="#" className={styles.socialLink} title="YouTube">▶</a>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className={styles.formGroup}>
                <label>I'm Interested In</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea
                  placeholder="Tell us about your goals and how we can help..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>Send Message →</button>
              {submitted && (
                <div className={styles.successMsg}>
                  ✓ Thank you! We'll be in touch within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
