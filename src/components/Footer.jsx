import Logo from './Logo.jsx'

function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="container">

                <div className="footer__grid">

                    <div className="footer__brand">

                        <div className="footer__logo">
                            <Logo />

                            Veridion
                        </div>
                        <p>Veridion English Academy delivers live online Business English training, IELTS and PTE
                            coaching, and supplementary English partnership programs for companies, professionals, and
                            schools.</p>
                        <div aria-label="Social media links" className="footer__socials">
                            <a aria-label="Facebook" className="footer__social-btn" href="#">f</a>
                            <a aria-label="Instagram" className="footer__social-btn" href="#">in</a>
                            <a aria-label="LinkedIn" className="footer__social-btn" href="#">li</a>
                            <a aria-label="TikTok" className="footer__social-btn" href="#">tk</a>
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4>Programs</h4>
                        <ul>
                            <li><a href="#programs">IELTS Coaching</a></li>
                            <li><a href="#programs">PTE Preparation</a></li>
                            <li><a href="#programs">Business English</a></li>
                            <li><a href="#programs">Conversational English</a></li>
                            <li><a href="#programs">Academic Writing</a></li>
                            <li><a href="#programs">Corporate Groups</a></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#for-companies">For Companies</a></li>
                            <li><a href="#for-students">For Students</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Refund Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Data Protection (DPA)</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <span>© 2026 Veridion English Academy. Philippines. All rights reserved.</span>
                    <div className="footer__bottom-links">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Contact</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer