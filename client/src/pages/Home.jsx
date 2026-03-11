import { Link } from 'react-router-dom'
import {
    Download, ArrowRight, Receipt, Banknote, LineChart, Bell,
    Users, Lock, Sparkles, Smartphone
} from 'lucide-react'

// ⬇️ Update this URL after creating your GitHub Release and uploading the APK there
const APK_DOWNLOAD_URL = 'https://github.com/madhab2024/YOUR_REPO_NAME/releases/latest/download/app-release.apk'

export default function Home() {
    const features = [
        { icon: Receipt, title: 'Smart Bill Splitting', desc: 'Split any bill evenly or with custom amounts among your group with just a few taps.' },
        { icon: Banknote, title: 'UPI Payment Support', desc: 'Request payments directly through any UPI app — no manual calculations needed.' },
        { icon: LineChart, title: 'Expense Tracking', desc: 'Keep a clear history of all shared expenses and who owes whom in real-time.' },
        { icon: Bell, title: 'Push Notifications', desc: 'Get notified instantly when someone adds a bill, pays, or requests settlement.' },
        { icon: Users, title: 'Group Management', desc: 'Create groups for trips, roommates, events and manage them effortlessly.' },
        { icon: Lock, title: 'Secure & Private', desc: 'All your data is securely stored and only accessible to you and your group members.' },
    ]

    return (
        <div className="page">
            {/* Hero */}
            <section className="hero">
                <div className="hero-badge">
                    <Sparkles size={16} strokeWidth={2} />
                    Free Android App madhab.
                </div>
                <h1>Split Bills <br/>Not Friendships</h1>
                <p>
                    The smartest way to split expenses with friends, family, and roommates.
                    Track, settle, and stay stress-free.
                </p>
                <div className="hero-actions">
                    <a href={APK_DOWNLOAD_URL} download className="btn-primary" id="hero-download-btn">
                        <Download size={18} />
                        Download APK
                    </a>
                    <Link to="/product" className="btn-secondary" id="learn-more-btn">
                        Learn More <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="hero-mockup">
                    <img src="/app-screenshot.png" alt="Split Bill app preview" />
                </div>
            </section>

            {/* Stats */}
            <div className="stats-row">
                {[
                    { num: 'Free', label: 'Forever & Always' },
                    { num: '100%', label: 'Offline Capable' },
                    { num: '5★', label: 'Design Quality' },
                ].map(s => (
                    <div className="stat-card" key={s.num}>
                        <div className="stat-number">{s.num}</div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </div>

            <div className="divider" />

            {/* Features */}
            <section className="section">
                <div className="section-label">Features</div>
                <h2 className="section-title">Everything you need to<br />split bills effortlessly</h2>
                <p className="section-subtitle">
                    Packed with powerful features that make shared expenses simple and transparent.
                </p>
                <div className="features-grid">
                    {features.map(f => (
                        <div className="feature-card" key={f.title}>
                            <div className="feature-icon">
                                <f.icon strokeWidth={1.5} size={26} color="var(--clr-primary-lt)" />
                            </div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="divider" />

            {/* Download CTA */}
            <div className="container">
                <div className="download-cta">
                    <h2>Ready to simplify your bills?</h2>
                    <p>Download Split Bill for Android — completely free, no ads, no subscriptions.</p>
                    <div className="download-badges">
                        <a href={APK_DOWNLOAD_URL} download className="download-badge" id="apk-download-badge">
                            <span className="badge-icon">
                                <Smartphone strokeWidth={1.5} size={32} color="var(--clr-primary-lt)" />
                            </span>
                            <div className="badge-text" style={{ textAlign: 'left' }}>
                                <span>Download for</span>
                                <strong>Android APK</strong>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
