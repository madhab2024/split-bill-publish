import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Download } from 'lucide-react'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const links = [
        { to: '/', label: 'Home' },
        { to: '/product', label: 'Product' },
        { to: '/manual', label: 'Manual' },
        { to: '/about', label: 'About' },
        { to: '/support', label: 'Support' },
    ]

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
                <img src="/app-icon.png" alt="Split Bill icon" />
                Split Bill
            </Link>

            <ul className={`nav-links ${open ? 'open' : ''}`}>
                {links.map(l => (
                    <li key={l.to}>
                        <NavLink
                            to={l.to}
                            end={l.to === '/'}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </NavLink>
                    </li>
                ))}
                <li>
                    <a
                        href="/app-release.apk"
                        download
                        className="nav-download-btn"
                        onClick={() => setOpen(false)}
                    >
                        <Download size={14} />
                        Download
                    </a>
                </li>
            </ul>

            <button
                className="hamburger"
                onClick={() => setOpen(o => !o)}
                aria-label="Toggle menu"
            >
                {open ? <X size={22} /> : <Menu size={22} />}
            </button>
        </nav>
    )
}
