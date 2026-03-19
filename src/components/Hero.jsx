
function Hero() {
    return (
        <section aria-labelledby="hero-heading" className="hero" id="hero">
            <div aria-hidden="true" className="hero__deco hero__deco--1"></div>
            <div aria-hidden="true" className="hero__deco hero__deco--2"></div>
            <div aria-hidden="true" className="hero__deco hero__deco--3"></div>

            <div className="container">

                <div className="hero__inner">

                    <div className="hero__content">

                        <div className="hero__eyebrow hero-anim-0">Business English • IELTS • School Partnerships</div>
                        <h1 className="hero-anim-1" id="hero-heading">Business English training, IELTS coaching, and <em>real-world English</em> that opens opportunities.</h1>
                        <p className="hero__sub hero-anim-2">For companies, working professionals, IELTS and PTE learners, and schools that need a strong supplementary English partner. Live online classes. Flexible schedules. Clear progress tracking.</p>

                        <div className="hero__ctas hero-anim-3">
                            <a className="btn btn-primary btn-lg" href="#contact-companies">
                                Request Corporate Demo
                            </a>

                            <a className="btn btn-outline-white btn-lg" href="#contact-students">
                                Book a Trial Class
                            </a>

                        </div>

                        <div aria-label="Key highlights" className="hero__trust hero-anim-4" role="list">
                            <div className="hero__trust-item"><span aria-hidden="true" className="dot"></span>Corporate training for teams</div>
                            <div className="hero__trust-item"><span aria-hidden="true" className="dot"></span>IELTS &amp; PTE coaching</div>
                            <div className="hero__trust-item"><span aria-hidden="true" className="dot"></span>School partnership programs</div>
                            <div className="hero__trust-item"><span aria-hidden="true" className="dot"></span>Cebu-based, online worldwide</div>
                        </div>
                    </div>

                    <div aria-label="Choose your path" className="hero__cards" role="region">
                        <div aria-label="For Companies" className="hero-card hero-card-anim-0" role="article" tabIndex="0">
                            <div className="hero-card__label">B2B English Training</div>
                            <div className="hero-card__title">Train your team with measurable English outcomes</div>
                            <div className="hero-card__desc">Business English, speaking confidence, writing, meetings, and reports for growing teams and partner institutions.</div>
                            <a aria-label="Learn more about corporate training" className="hero-card__link" href="#for-companies">Explore corporate plans ›</a>
                        </div>

                        <div aria-label="For Students" className="hero-card hero-card--orange hero-card-anim-1" role="article" tabIndex="0">
                            <div className="hero-card__label">IELTS, PTE &amp; Academic Support</div>
                            <div className="hero-card__title">Get exam-ready with clear feedback and a real plan</div>
                            <div className="hero-card__desc">Flexible live coaching for busy learners who need structure, accountability, and stronger speaking and writing results.</div>
                            <a aria-label="Learn more about student programs" className="hero-card__link" href="#for-students">View student programs ›</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;