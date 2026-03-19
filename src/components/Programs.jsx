
function Programs() {
    return (
        <section aria-labelledby="programs-heading" className="programs section" id="programs">
            <div className="container">

                <div className="text-center">
                    <div className="tag">What We Offer</div>
                    <h2 id="programs-heading">Programs designed for teams, IELTS candidates, and partner schools</h2>
                    <p style={{ maxWidth: '500px', margin: '12px auto 0' }}>Practical English programs built around work, study, and institutional goals.</p>
                </div>

                <div className="programs__grid">

                    <div className="program-card reveal">
                        <div aria-hidden="true" className="program-card__emoji">🏆</div>
                        <h3 className="program-card__title">IELTS Coaching</h3>
                        <p className="program-card__desc">Targeted preparation for each IELTS band, with test strategy, writing correction, and mock tests built into every cycle.</p>
                        <div className="program-card__tags">
                            <span className="program-tag">Band 6–8 target</span>
                            <span className="program-tag">All 4 skills</span>
                            <span className="program-tag">Mock tests</span>
                        </div>
                    </div>

                    <div className="program-card reveal reveal-delay-1">
                        <div aria-hidden="true" className="program-card__emoji">🎓</div>
                        <h3 className="program-card__title">PTE Academic Coaching</h3>
                        <p className="program-card__desc">Score-focused PTE preparation with AI-scored practice tasks, speaking fluency drills, and time-management strategies.</p>
                        <div className="program-card__tags">
                            <span className="program-tag">AI-scored practice</span>
                            <span className="program-tag">Speaking fluency</span>
                            <span className="program-tag program-tag--orange">High demand</span>
                        </div>
                    </div>

                    <div className="program-card reveal reveal-delay-2">
                        <div aria-hidden="true" className="program-card__emoji">🏫</div>
                        <h3 className="program-card__title">School Partnership Programs</h3>
                        <p className="program-card__desc">Supplementary English classes, speaking clubs, exam prep support, and custom learning plans for schools, colleges, and review centers.</p>
                        <div className="program-card__tags">
                            <span className="program-tag">Schools</span>
                            <span className="program-tag">Colleges</span>
                            <span className="program-tag program-tag--orange">Partner-ready</span>
                        </div>
                    </div>

                    <div className="program-card reveal">
                        <div aria-hidden="true" className="program-card__emoji">💬</div>
                        <h3 className="program-card__title">Conversational English</h3>
                        <p className="program-card__desc">Build confidence to speak naturally in everyday situations — job interviews, social settings, or international travel.</p>
                        <div className="program-card__tags">
                            <span className="program-tag">Fluency focus</span>
                            <span className="program-tag">Accent clarity</span>
                            <span className="program-tag">Confidence building</span>
                        </div>
                    </div>

                    <div className="program-card reveal reveal-delay-1">
                        <div aria-hidden="true" className="program-card__emoji">✍️</div>
                        <h3 className="program-card__title">Academic Writing</h3>
                        <p className="program-card__desc">Essays, reports, and research writing with structured feedback on coherence, grammar, vocabulary, and academic style.</p>
                        <div className="program-card__tags">
                            <span className="program-tag">Essay structure</span>
                            <span className="program-tag">Feedback loops</span>
                            <span className="program-tag">Grammar repair</span>
                        </div>
                    </div>

                    <div className="program-card reveal reveal-delay-2">
                        <div aria-hidden="true" className="program-card__emoji">🏢</div>
                        <h3 className="program-card__title">Corporate Group Programs</h3>
                        <p className="program-card__desc">Group classes for teams of 5–30, with shift scheduling, HR reporting, and curriculum tailored to your industry and communication gaps.</p>
                        <div className="program-card__tags">
                            <span className="program-tag program-tag--orange">For companies</span>
                            <span className="program-tag">Group up to 30</span>
                            <span className="program-tag">HR reporting</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Programs