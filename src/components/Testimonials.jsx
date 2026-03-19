
function Testimonials() {
    return (
        <section aria-labelledby="testimonials-heading" className="testimonials section" id="testimonials">
            <div className="container text-center">
                <div className="tag">What Learners Say</div>
                <h2 id="testimonials-heading">Real results, real feedback</h2>

                <div className="testimonials__grid">

                    <div className="testimonial-card reveal">
                        <div className="testimonial-label">Corporate Learner</div>
                        <div aria-hidden="true" className="testimonial-card__quote">"</div>
                        <p className="testimonial-card__text">Our team's confidence in client calls improved within weeks — and the progress reports made it easy to track ROI and show results to leadership.</p>
                        <div className="testimonial-card__author">
                            <div aria-hidden="true" className="testimonial-card__avatar">👤</div>
                            <div>
                                <div className="testimonial-card__name">Maria L.</div>
                                <div className="testimonial-card__role">HR Lead, mid-size services company</div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card reveal reveal-delay-1">
                        <div className="testimonial-label">Night-Shift Professional</div>
                        <div aria-hidden="true" className="testimonial-card__quote">"</div>
                        <p className="testimonial-card__text">The schedule was genuinely flexible. I could attend after night shift and still stay consistent week after week. That made all the difference.</p>
                        <div className="testimonial-card__author">
                            <div aria-hidden="true" className="testimonial-card__avatar">👤</div>
                            <div>
                                <div className="testimonial-card__name">Carlos D.</div>
                                <div className="testimonial-card__role">BPO Team Lead</div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card reveal reveal-delay-2">
                        <div className="testimonial-label">IELTS Candidate</div>
                        <div aria-hidden="true" className="testimonial-card__quote">"</div>
                        <p className="testimonial-card__text">Clear, specific feedback every class. I finally understood exactly what my speaking mistakes were — and fixed them. Hit my target band on the first try.</p>
                        <div className="testimonial-card__author">
                            <div aria-hidden="true" className="testimonial-card__avatar">👤</div>
                            <div>
                                <div className="testimonial-card__name">Reena M.</div>
                                <div className="testimonial-card__role">IELTS Learner — achieved Band 7.5</div>
                            </div>
                        </div>
                    </div>

                </div>

                <p className="reveal" style={{ marginTop: '32px', fontSize: '.78rem', color: 'rgba(255,255,255,.35)' }}>
                    Testimonials are representative examples. Real learner quotes added as cohort feedback becomes available. All published quotes used with explicit consent.
                </p>

            </div>
        </section>
    );
}

export default Testimonials