import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Split Bill. Built with ❤️ for Android users everywhere.</p>
            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/manual">Manual</Link>
                <Link to="/about">About</Link>
                <Link to="/support">Support</Link>
                <a href="/app-release.apk" download>Download APK</a>
            </div>
        </footer>
    )
}
