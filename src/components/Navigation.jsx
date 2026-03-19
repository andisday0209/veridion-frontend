import { useState, useEffect, useRef } from 'react';
import Logo from './Logo.jsx'

function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <nav aria-label="Main navigation" className="nav" role="navigation" ref={navRef}>
            <div className="container">
                <div className="nav__inner">

                    <a aria-label="Veridion English Academy home" className="nav__logo" href="#">
                        <Logo className="nav__logo-img"/>
                        Veridion
                    </a>

                    <ul className="nav__links" role="list">
                        <li><a href="#for-companies">For Companies</a></li>
                        <li><a href="#for-students">For Students</a></li>
                        <li><a href="#programs">Programs</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <div className="nav__cta">
                        <a className="btn btn-outline" href="#contact-students">Book a Trial</a>
                        <a className="btn btn-primary" href="#contact-companies">Corporate Demo</a>
                    </div>

                    <button
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Open menu"
                        className="nav__hamburger"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span><span></span><span></span>
                    </button>

                </div>
            </div>

            <div aria-label="Mobile navigation" className={`nav__mobile ${isMobileMenuOpen ? 'open' : ''}`}
                 role="dialog">
                <a href="#for-companies" onClick={() => setIsMobileMenuOpen(false)}>For Companies</a>
                <a href="#for-students" onClick={() => setIsMobileMenuOpen(false)}>For Students</a>
                <a href="#programs" onClick={() => setIsMobileMenuOpen(false)}>Programs</a>
                <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>

                <div className="nav__mobile-btns">
                    <a className="btn btn-outline" href="#contact-students" onClick={() => setIsMobileMenuOpen(false)}>Book a Trial Class</a>
                    <a className="btn btn-primary" href="#contact-companies" onClick={() => setIsMobileMenuOpen(false)}>Request Corporate Demo</a>
                </div>

            </div>

        </nav>
    );
}


export default Navigation;