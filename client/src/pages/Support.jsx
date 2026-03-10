import { useState } from 'react'
import {
    Send, Loader, Mail, Clock, Globe, PartyPopper, AlertTriangle
} from 'lucide-react'

const TOPICS = [
    'Installation Help',
    'Bug Report',
    'Feature Request',
    'Account Issue',
    'Payment Problem',
    'Other',
]

export default function Support() {
    const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | loading | success | error

    const handleChange = e => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setStatus('loading')

        // Web3Forms implementation
        const formData = new FormData()
        formData.append('access_key', 'YOUR_PUBLIC_ACCESS_KEY_HERE')
        formData.append('name', form.name)
        formData.append('email', form.email)
        formData.append('subject', `Split Bill Support: ${form.topic || 'General Inquiry'}`)
        formData.append('message', form.message)

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })
            const data = await res.json()

            if (data.success) {
                setStatus('success')
            } else {
                setStatus('error')
                console.error('Web3Forms Error:', data)
            }
        } catch (err) {
            console.error('Network Error:', err)
            setStatus('error')
        }
    }

    return (
        <div className="page">
            <div className="page-header">
                <div className="section-label">Support</div>
                <h1 className="section-title">How can we help you?</h1>
                <p className="section-subtitle">
                    Have a question, found a bug, or just want to say hi? Send us a message and we'll get back to you.
                </p>
            </div>

            <div className="support-grid">
                {/* Left: Info */}
                <div className="support-info">
                    <h2>Get in touch</h2>
                    <p>
                        We're a small team and we genuinely care about every message we receive.
                        Whether it's a bug report or a feature idea — we read everything.
                    </p>
                    <div className="contact-cards">
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <Mail size={22} strokeWidth={1.5} color="var(--clr-primary-lt)" />
                            </div>
                            <div className="contact-card-text">
                                <strong>Email Support</strong>
                                <span>support@splitbill.app</span>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <Clock size={22} strokeWidth={1.5} color="var(--clr-primary-lt)" />
                            </div>
                            <div className="contact-card-text">
                                <strong>Response Time</strong>
                                <span>Usually within 24 hours</span>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <Globe size={22} strokeWidth={1.5} color="var(--clr-primary-lt)" />
                            </div>
                            <div className="contact-card-text">
                                <strong>Community</strong>
                                <span>Join our GitHub discussions</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="form-card">
                    {status === 'success' ? (
                        <div className="form-success">
                            <div className="success-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                <PartyPopper size={48} strokeWidth={1.5} color="#10b981" />
                            </div>
                            <h3>Message sent!</h3>
                            <p>Thanks for reaching out. We'll get back to you as soon as possible.</p>
                            <button
                                className="btn-secondary"
                                style={{ margin: '1.5rem auto 0', display: 'flex' }}
                                onClick={() => { setStatus('idle'); setForm({ name: '', email: '', topic: '', message: '' }) }}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} id="support-form">
                            {status === 'error' && (
                                <div className="form-error" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <AlertTriangle size={18} strokeWidth={2} />
                                    Something went wrong submitting your form. Please ensure you have configured the Web3Forms access key.
                                </div>
                            )}

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="support-name">Your Name</label>
                                    <input
                                        id="support-name"
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="support-email">Email Address</label>
                                    <input
                                        id="support-email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="support-topic">Topic</label>
                                <select
                                    id="support-topic"
                                    name="topic"
                                    value={form.topic}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a topic...</option>
                                    {TOPICS.map(t => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="support-message">Message</label>
                                <textarea
                                    id="support-message"
                                    name="message"
                                    placeholder="Describe your issue or question in detail..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                className="form-submit-btn"
                                type="submit"
                                id="support-submit-btn"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader size={18} style={{ animation: 'spin 1s linear infinite' }} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}
