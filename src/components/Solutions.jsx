function Solutions() {
    return (
        <section aria-labelledby="segment-heading" className="segment-chooser section--tight" id="solutions">
            <div className="container">

                <div className="text-center">
                    <div className="tag">Who We Serve</div>
                    <h2 id="segment-heading">English solutions for companies, learners, and academic partners</h2>
                    <p style={{ maxWidth: '520px', margin: '12px auto 0' }}>Choose the path that fits your goals. We support B2B training, exam preparation, and school partnership programs with live teaching and structured support.</p>
                </div>

                <div className="segment-chooser__grid">

                    <div aria-labelledby="companies-heading" className="track-card track-card--companies reveal" id="for-companies" tabIndex="0">
                        <div aria-hidden="true" className="track-card__icon">🏢</div>
                        <div className="tag" style={{ background: 'rgba(255,255,255,.12)', color: 'var(--green-light)' }}>For HR &amp; L&amp;D Teams</div>
                        <h3 className="track-card__title" id="companies-heading">Corporate English Training</h3>
                        <p className="track-card__desc">
                            Structured English programs for your workforce — with shift-aligned scheduling, measurable outcomes, and regular HR reports so you always know the ROI.
                        </p>

                        <ul className="track-card__benefits" role="list">
                            <li><span aria-hidden="true" className="benefit-check">✓</span> Shift-friendly class scheduling across all departments</li>
                            <li><span aria-hidden="true" className="benefit-check">✓</span> Monthly progress &amp; attendance reports for management</li>
                            <li><span aria-hidden="true" className="benefit-check">✓</span> Business English, presentation skills &amp; industry-specific modules</li>
                            <li><span aria-hidden="true" className="benefit-check">✓</span> Dedicated teacher assigned to your team</li>
                            <li><span aria-hidden="true" className="benefit-check">✓</span> Pilot program available — start with a demo</li>
                        </ul>

                        <a aria-label="Request a corporate demo" className="btn btn-orange btn-lg" href="#contact">
                            Request a Corporate Demo →
                        </a>

                    </div>

                    <div aria-labelledby="students-heading" className="track-card track-card--students reveal reveal-delay-2" id="for-students" tabIndex="0">
                        <div aria-hidden="true" className="track-card__icon">🎯</div>
                        <div className="tag">For Working Professionals &amp; Learners</div>
                        <h3 className="track-card__title" id="students-heading">Personal English Coaching</h3>
                        <p className="track-card__desc">
                            Live classes around your schedule, expert feedback on every session, and a personalized plan that moves at your pace — so you actually improve.
                        </p>

                        <ul className="track-card__benefits" role="list">
                            <li><span aria-hidden="true" className="benefit-check">✓</span> Flexible schedules — evenings, weekends &amp; after-shift slots</li>
                            <li><span aria-hidden="true" className="benefit-check">✓</span> IELTS &amp; PTE exam coaching with structured study plan</li>
                            <li><span aria-hidden="true" className="benefit-check">✓</span> Self-study platform + live class hybrid access</li>
                            <li><span aria-hidden="true" className="benefit-check">✓</span> Personalized learning path based on your goals</li>
                            <li><span aria-hidden="true" className="benefit-check">✓</span> Premium materials included — no extra cost</li>
                        </ul>

                        <a aria-label="Book a trial class" className="btn btn-primary btn-lg" href="#contact">
                            Book a Trial Class →
                        </a>

                    </div>
                </div>

                <div className="reveal" style={{ marginTop: '24px', padding: '18px 20px', border: '1px solid rgba(26,61,43,.12)', borderRadius: '16px', background: '#fff', maxWidth: '920px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left' }}>
                    <strong style={{ color: 'var(--green-dark)', display: 'block', marginBottom: '6px' }}>Also for schools, colleges, and review centers</strong>
                    <p style={{ margin: 0 }}>We can deliver supplementary English classes, speaking clubs, exam support, and custom partner programs that strengthen your students’ communication skills without overloading your internal team.</p>
                </div>

            </div>
        </section>
    );
}

export default Solutions