import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'

const serviceOptions = [
  'Coaching',
  'Consulting',
  'Business Development',
  'Innovation & Commercialization',
  'Speaking / Workshop',
  'EVOLVE Retreat 2027',
  'EVOLVE Community',
  'Other',
]

const hearAboutOptions = [
  'Referral',
  'Social Media',
  'Event / Speaking Engagement',
  'Web Search',
  'Podcast / Article',
  'Other',
]

const contactMethods = [
  'Email',
  'Phone',
  'Either',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    title: '',
    service: '',
    hearAbout: '',
    preferredMethod: '',
    message: '',
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      title: '',
      service: '',
      hearAbout: '',
      preferredMethod: '',
      message: '',
    })
  }

  return (
    <div className={styles.contactPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <div className="section-label">Connect</div>
          <h2 className="section-title">Let's explore what's next</h2>
          <p className="section-subtitle">Whether you are seeking coaching, speaking, retreat support, or a strategic growth conversation, EVA is here to help you move with more clarity and confidence.</p>
        </div>

        <div className={styles.contactGrid}>
          <div>
            <p className={styles.introText}>
              Share a little about your goals and we'll follow up with the right next step — a discovery call, program information, or tailored recommendations.
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
              <div className={styles.contactIcon}>🕒</div>
              <div><h4>Business Hours</h4><p>Monday–Friday, business hours by appointment</p></div>
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
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Company / Business Name</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Your Title</label>
                <input
                  type="text"
                  placeholder="Add Your Title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Service Interest</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>How did you hear about EVA?</label>
                  <select
                    value={form.hearAbout}
                    onChange={(e) => setForm({ ...form, hearAbout: e.target.value })}
                  >
                    <option value="">Select...</option>
                    {hearAboutOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Preferred Contact Method</label>
                  <select
                    value={form.preferredMethod}
                    onChange={(e) => setForm({ ...form, preferredMethod: e.target.value })}
                  >
                    <option value="">Select...</option>
                    {contactMethods.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
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
