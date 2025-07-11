import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks for reaching out! We will get back to you soon.')
    e.target.reset()
  }

  return (
    <section className="contact-form-section">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" required></textarea>
        </label>
        <button type="submit">Send</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  )
}

export default ContactForm
