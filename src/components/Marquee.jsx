
function Marquee({ variant = 'dark', reverse = false }) {
    const words = ["Live Classes", "Expert Teachers", "IELTS Coaching", "Flexible Schedules", "Corporate Training", "PTE Preparation", "Real Results", "Progress Reports"];
    const allWords = [...words, ...words];

    const sectionClass = `marquee-section ${variant === 'orange' ? 'marquee-section--orange' : ''}`;
    const trackClass = `marquee-track ${reverse ? 'marquee-track--reverse' : ''}`;

    return (
        <div aria-hidden="true" className={sectionClass}>
            <div className={trackClass}>

                <ul className="marquee-list" role="presentation">
                    {allWords.map((word, idx) => (
                        <li className="marquee-item" key={idx}>
                            <span className="marquee-word">{word}</span>
                            <span className="marquee-dot"></span>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default Marquee