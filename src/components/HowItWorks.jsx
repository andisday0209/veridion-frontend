
function HowItWorks() {
    return (
        <section aria-labelledby="how-heading" className="how-it-works section" id="how-it-works">

            <div className="container text-center">

                <div className="tag">Simple Process</div>
                <h2 id="how-heading">How it works</h2>
                <p style={{ maxWidth: '480px', margin: '12px auto 0' }}>From sign-up to fluency in five clear steps. No confusion. No long waits.</p>

                <div className="steps" role="list">

                    <div className="step reveal" role="listitem">
                        <div aria-hidden="true" className="step__num">1</div>
                        <div aria-hidden="true" className="step__icon">📋</div>
                        <div className="step__title">Choose your program</div>
                        <p className="step__desc">Pick a course level and schedule that fits your life or your team's needs.</p>
                    </div>

                    <div className="step reveal reveal-delay-1" role="listitem">
                        <div aria-hidden="true" className="step__num">2</div>
                        <div aria-hidden="true" className="step__icon">🗓️</div>
                        <div className="step__title">Find the right schedule</div>
                        <p className="step__desc">Pick from early morning, evening, or weekend slots that fit around your work or shift.</p>
                    </div>

                    <div className="step reveal reveal-delay-2" role="listitem">
                        <div aria-hidden="true" className="step__num">3</div>
                        <div aria-hidden="true" className="step__icon">💻</div>
                        <div className="step__title">Attend live online classes</div>
                        <p className="step__desc">Interactive lessons via our platform — from anywhere, on any device.</p>
                    </div>

                    <div className="step reveal reveal-delay-3" role="listitem">
                        <div aria-hidden="true" className="step__num">4</div>
                        <div aria-hidden="true" className="step__icon">📚</div>
                        <div className="step__title">Access materials anytime</div>
                        <p className="step__desc">Practise between sessions with premium learning materials on our self-study platform.</p>
                    </div>

                    <div className="step reveal reveal-delay-4" role="listitem">
                        <div aria-hidden="true" className="step__num">5</div>
                        <div aria-hidden="true" className="step__icon">📈</div>
                        <div className="step__title">Track your improvement</div>
                        <p className="step__desc">Regular feedback, progress scores, and reports — for you or your HR team.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks