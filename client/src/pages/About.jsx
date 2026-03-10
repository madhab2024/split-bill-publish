import { Github, Linkedin, Instagram, MapPin, HeartHandshake } from 'lucide-react'

export default function About() {
    const skills = [
        'React Native', 'Expo', 'JavaScript', 'Node.js', 'Express',
        'Firebase', 'MongoDB', 'REST APIs', 'UI/UX Design', 'Git',
    ]

    return (
        <div className="page">
            <div className="page-header">
                <div className="section-label">About Me</div>
                <h1 className="section-title">The person behind Split Bill</h1>
                <p className="section-subtitle">
                    A passionate developer who believes managing shared expenses should be simple and stress-free.
                </p>
            </div>

            <div className="section" style={{ paddingTop: '1rem' }}>
                <div className="about-grid">
                    {/* Left: Avatar + social */}
                    <div className="about-avatar-wrap">
                        <img
                            src="/myphoto.jpeg"
                            alt="Madhab Mondal"
                            className="about-avatar"
                            style={{ objectFit: 'cover' }}
                        />
                        <h3 style={{ fontWeight: 700, fontSize: '1.2rem' }}>Madhab Mondal</h3>
                        <p style={{ color: 'var(--clr-muted)', fontSize: '0.85rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                            <MapPin size={12} /> Bhubaneswar
                        </p>
                        <div className="about-social-links">
                            <a href="https://github.com/madhab2024" target="_blank" rel="noreferrer" className="social-link" id="github-link">
                                <Github size={14} strokeWidth={2} /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/madhab-mondal/" target="_blank" rel="noreferrer" className="social-link" id="linkedin-link">
                                <Linkedin size={14} strokeWidth={2} /> LinkedIn
                            </a>
                            <a href="https://www.instagram.com/madhab_mondal_20/" target="_blank" rel="noreferrer" className="social-link" id="instagram-link">
                                <Instagram size={14} strokeWidth={2} /> Insta
                            </a>
                        </div>
                    </div>

                    {/* Right: Story */}
                    <div className="about-content">
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            Hey there! <HeartHandshake size={32} strokeWidth={1.5} color="var(--clr-primary-lt)" />
                        </h2>
                        <p className="role">B.Tech CSE AIML Student</p>

                        <p>
                            I'm Madhab, a passionate developer studying Computer Science and Engineering (AIML) in Bhubaneswar.
                            I love building apps that solve real-world problems. Split Bill was born out of personal frustration
                            — every time I went on a trip or had dinner with friends, settling up was always a chaotic mess of
                            calculations and reminders.
                        </p>
                        <p>
                            I wanted to build something clean, intuitive, and actually useful.
                            So I built <strong style={{ color: 'var(--clr-primary-lt)' }}>Split Bill</strong> —
                            a mobile app that makes splitting expenses as simple as a few taps.
                        </p>
                        <p>
                            I specialize in <strong>React Native</strong> and <strong>Expo</strong> for mobile
                            development, and I love crafting experiences that feel premium and native without the
                            complexity. When I'm not coding, I'm probably experimenting with new AI models or overthinking restaurant bills.
                        </p>

                        <div className="skills-section">
                            <h3>Tech Stack &amp; Skills</h3>
                            <div className="skill-tags">
                                {skills.map(s => (
                                    <span className="skill-tag" key={s}>{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
