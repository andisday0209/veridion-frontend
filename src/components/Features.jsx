function Features() {
    return (
        <section aria-labelledby="platform-heading" className="features section" id="platform">
            <div className="container">
                <div className="features__inner">
                    <div>
                        <div className="tag">Platform &amp; Delivery</div>
                        <h2 id="platform-heading">Live classes, structured reporting, and a clearer path to results</h2>
                        <div className="features__list">

                            <div className="feature-item reveal">
                                <div aria-hidden="true" className="feature-icon">📡</div>
                                <div>
                                    <div className="feature-item__title">Live online classes</div>
                                    <p className="feature-item__desc">Designed for decision-makers, busy learners, and academic partners who need consistency, visibility, and real progress.</p>
                                </div>
                            </div>

                            <div className="feature-item reveal reveal-delay-1">
                                <div aria-hidden="true" className="feature-icon">🗂️</div>
                                <div>
                                    <div className="feature-item__title">Self-study platform access</div>
                                    <p className="feature-item__desc">Practice vocabulary, grammar, and listening between sessions with structured exercises on our learning platform.</p>
                                </div>
                            </div>

                            <div className="feature-item reveal reveal-delay-2">
                                <div aria-hidden="true" className="feature-icon">📊</div>
                                <div>
                                    <div className="feature-item__title">Progress &amp; attendance tracking</div>
                                    <p className="feature-item__desc">You — or your HR team — get regular progress reports: attendance rates, scores, and improvement benchmarks.</p>
                                </div>
                            </div>

                            <div className="feature-item reveal reveal-delay-3">
                                <div aria-hidden="true" className="feature-icon">⏰</div>
                                <div>
                                    <div className="feature-item__title">Flexible scheduling</div>
                                    <p className="feature-item__desc">Early mornings, evenings, weekends. Sessions are booked around your schedule — not ours.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div aria-hidden="true" className="features__visual">
                        <div className="platform-mockup">
                            <div className="platform-mockup__bar">
                                <div className="platform-mockup__dot"></div>
                                <div className="platform-mockup__dot"></div>
                                <div className="platform-mockup__dot"></div>
                            </div>

                            <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.4)', marginBottom: '14px', letterSpacing: '.06em' }}>
                                LEARNER DASHBOARD · Q1 Progress
                            </div>

                            <div className="platform-stat">
                                <div>
                                    <div className="platform-stat__label">Overall Progress</div>
                                    <div className="platform-stat__bar-wrap"><div className="platform-stat__bar-fill" style={{ width: '78%' }}></div></div>
                                </div>
                                <div className="platform-stat__value">78%</div>
                            </div>

                            <div className="platform-stat">
                                <div>
                                    <div className="platform-stat__label">Attendance Rate</div>
                                    <div className="platform-stat__bar-wrap"><div className="platform-stat__bar-fill" style={{ width: '93%', background: 'var(--orange)' }}></div></div>
                                </div>
                                <div className="platform-stat__value">93%</div>
                            </div>

                            <div className="platform-stat">
                                <div>
                                    <div className="platform-stat__label">Speaking Score</div>
                                    <div className="platform-stat__bar-wrap"><div className="platform-stat__bar-fill" style={{ width: '65%' }}></div></div>
                                </div>
                                <div className="platform-stat__value">6.5</div>
                            </div>

                            <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: '8px', padding: '16px', marginTop: '12px' }}>
                                <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.4)', marginBottom: '8px' }}>UPCOMING CLASSES</div>
                                <div style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.7)', display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                                    <span>Mon 7:00 PM — Business Writing</span>
                                    <span style={{ color: 'var(--green-light)' }}>✓</span>
                                </div>

                                <div style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.7)', display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                                    <span>Wed 7:00 PM — Speaking Drill</span>
                                    <span style={{ color: 'var(--orange)' }}>⏰</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Features;