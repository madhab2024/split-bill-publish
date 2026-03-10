import {
    DownloadCloud, UserCircle, Users, Receipt, Banknote,
    CheckCircle, Lightbulb, HelpCircle
} from 'lucide-react'

export default function Manual() {
    const steps = [
        {
            num: 1,
            icon: DownloadCloud,
            title: 'Download & Install',
            desc: 'Download the APK from this website. On your Android phone, go to Settings → Security and enable "Install from Unknown Sources". Then open the downloaded APK file and tap Install.',
        },
        {
            num: 2,
            icon: UserCircle,
            title: 'Create Your Account',
            desc: 'Open Split Bill and sign up with your email address. Set up your profile with a display name and optionally a profile picture. You can also sign in with Google for quick access.',
        },
        {
            num: 3,
            icon: Users,
            title: 'Create or Join a Group',
            desc: 'Tap "New Group" to create a group (e.g., "Road Trip 2024", "Flatmates"). Share the group invite link or code with your friends so they can join. You can be in multiple groups at once.',
        },
        {
            num: 4,
            icon: Receipt,
            title: 'Add a Bill',
            desc: 'Inside a group, tap the "+" button to add a new expense. Enter the amount, a description, and who paid. Then select how to split it — equally among everyone, or with custom amounts.',
        },
        {
            num: 5,
            icon: Banknote,
            title: 'Request & Send Payments',
            desc: 'When it\'s time to settle, tap "Pay" next to any debt. This opens your preferred UPI app (GPay, PhonePe, Paytm, BHIM, etc.) pre-filled with the exact amount and your friend\'s UPI ID.',
        },
        {
            num: 6,
            icon: CheckCircle,
            title: 'Mark as Settled',
            desc: 'Once payment is done, mark the transaction as settled in the app. The other person will get notified. If there\'s a dispute, you can flag it for discussion within the group.',
        },
    ]

    const faqs = [
        {
            q: 'Is Split Bill completely free?',
            a: 'Yes! Split Bill is 100% free with no ads, no premium features, and no subscriptions.',
        },
        {
            q: 'Do all my friends need to download the app?',
            a: 'For the best experience, yes — but you can still add offline members and track what they owe manually.',
        },
        {
            q: 'Is my data safe?',
            a: 'Your data is stored securely on our servers. We never share your financial information with third parties.',
        },
        {
            q: 'What if I accidentally added the wrong amount?',
            a: 'You can edit or delete any expense you created by long-pressing on it in the group view.',
        },
        {
            q: 'Does it work without internet?',
            a: 'Core expense tracking works offline. Data will sync automatically once you\'re back online.',
        },
    ]

    return (
        <div className="page">
            <div className="page-header">
                <div className="section-label">User Manual</div>
                <h1 className="section-title">How to use Split Bill</h1>
                <p className="section-subtitle">
                    Follow these simple steps to get up and running in minutes.
                </p>
            </div>

            <div className="section" style={{ paddingTop: '1rem' }}>
                <div className="manual-steps">
                    {steps.map(step => (
                        <div className="step-card" key={step.num}>
                            <div className="step-number">{step.num}</div>
                            <div className="step-content">
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <step.icon size={20} strokeWidth={2} color="var(--clr-primary-lt)" />
                                    {step.title}
                                </h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tip-box" style={{ display: 'flex', gap: '1rem' }}>
                    <span className="tip-icon">
                        <Lightbulb size={24} strokeWidth={1.5} color="#06b6d4" />
                    </span>
                    <p>
                        <strong>Pro Tip:</strong> Add your UPI ID in your profile settings so friends can
                        send you payments directly without needing to type it in manually each time.
                    </p>
                </div>
            </div>

            {/* FAQ */}
            <div className="section">
                <div className="section-label">FAQ</div>
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                    {faqs.map((faq, i) => (
                        <div className="feature-card" key={i} style={{ padding: '1.5rem 2rem' }}>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <HelpCircle size={18} strokeWidth={2} color="var(--clr-muted)" />
                                {faq.q}
                            </h3>
                            <p style={{ color: 'var(--clr-muted)', fontSize: '0.92rem', paddingLeft: '26px' }}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
