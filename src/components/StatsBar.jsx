
function StatsBar() {
    const symbolStyle = { fontFamily: "'Fraunces', serif", fontSize: '2.8rem', fontWeight: 900, color: 'var(--green-dark)' };

    return (
        <div className="stats-bar">
            <div className="container">
                <div className="stats-bar__grid">

                    <div className="stats-bar__item reveal">
                        <div className="stat-num" data-target="500">0</div><span style={symbolStyle}>+</span>
                        <div className="stats-bar__label">Learners trained</div>
                    </div>

                    <div className="stats-bar__item reveal reveal-delay-1">
                        <div className="stat-num" data-target="98">0</div><span style={symbolStyle}>%</span>
                        <div className="stats-bar__label">Learner satisfaction</div>
                    </div>

                    <div className="stats-bar__item reveal reveal-delay-2">
                        <div className="stat-num" data-target="50">0</div><span style={symbolStyle}>+</span>
                        <div className="stats-bar__label">Companies served</div>
                    </div>

                    <div className="stats-bar__item reveal reveal-delay-3">
                        <div className="stat-num" data-target="3">0</div><span style={symbolStyle}>x</span>
                        <div className="stats-bar__label">Faster improvement vs traditional</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default StatsBar;