import {
    Download, Zap, Globe, Blocks, Smartphone, Bell,
    LineChart, Settings, HardDrive, Cpu, Wifi
} from 'lucide-react'

export default function Product() {
    return (
        <div className="page">
            {/* Product Hero */}
            <div className="product-hero">
                <div className="product-info">
                    <div className="section-label">The App</div>
                    <h1>Split Bill</h1>
                    <p>
                        Split Bill is a free Android application designed to eliminate the awkwardness
                        of splitting shared expenses. Whether you're on a road trip, sharing rent, or
                        just splitting lunch — we've got you covered.
                    </p>
                    <p>
                        Built with React Native and Expo, the app delivers a smooth, native experience
                        with real-time syncing, UPI payment support, and push notifications.
                    </p>

                    <div className="product-meta">
                        <div className="meta-item">
                            <span className="meta-label">Platform</span>
                            <span className="meta-value">Android</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Version</span>
                            <span className="meta-value">1.0.0</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Size</span>
                            <span className="meta-value">~45 MB</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Price</span>
                            <span className="meta-value">Free</span>
                        </div>
                    </div>

                    <a href="/app-release.apk" download className="btn-primary" id="product-download-btn">
                        <Download size={18} />
                        Download APK
                    </a>
                </div>

                <img src="/app-screenshot.png" alt="Split Bill app screenshot" />
            </div>

            <div className="divider" />

            {/* Why Split Bill */}
            <section className="section">
                <div className="section-label">Why Split Bill?</div>
                <h2 className="section-title">Built for real-life situations</h2>
                <p className="section-subtitle">
                    No subscriptions, no sign-up walls, no ads. Just a powerful tool that works.
                </p>

                <div className="features-grid">
                    {[
                        { icon: Zap, title: 'Instant Setup', desc: 'Download, install, and start splitting in under 2 minutes. No lengthy onboarding.' },
                        { icon: Globe, title: 'UPI Integration', desc: 'Generate payment requests for any UPI app — GPay, PhonePe, Paytm, and more.' },
                        { icon: Blocks, title: 'Flexible Splitting', desc: 'Split evenly, by percentage, or with custom amounts per person.' },
                        { icon: Smartphone, title: 'Offline Support', desc: `Core features work without internet. Sync when you're back online.` },
                        { icon: Bell, title: 'Smart Reminders', desc: 'Friendly nudges remind your friends to pay without any awkward conversations.' },
                        { icon: LineChart, title: 'Expense History', desc: 'Full history of every bill, payment, and settlement at your fingertips.' },
                    ].map(f => (
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

            {/* Requirements */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="feature-card" style={{ maxWidth: 560 }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Settings strokeWidth={1.5} size={20} color="var(--clr-primary-lt)" />
                        System Requirements
                    </h3>
                    {[
                        { label: 'Android Version', value: 'Android 8.0 (Oreo) or higher', icon: Smartphone },
                        { label: 'RAM', value: '2 GB or more recommended', icon: Cpu },
                        { label: 'Storage', value: '~60 MB free space', icon: HardDrive },
                        { label: 'Internet', value: 'For sync & notifications', icon: Wifi },
                    ].map(req => (
                        <div key={req.label} style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '0.6rem 0', borderBottom: '1px solid var(--clr-border)',
                            fontSize: '0.9rem'
                        }}>
                            <span style={{ color: 'var(--clr-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <req.icon size={16} strokeWidth={1.5} />
                                {req.label}
                            </span>
                            <span style={{ fontWeight: 600 }}>{req.value}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
