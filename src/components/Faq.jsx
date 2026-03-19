import { useState } from 'react';

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "What English levels do you accept?", a: "We accept all proficiency levels — from beginner (A1) to upper-intermediate (B2+). Before your first class, we conduct a short placement session to understand your current level and tailor the learning plan to your specific goals." },
        { q: "How flexible is the scheduling?", a: "Very. We offer early morning, evening, and weekend slots specifically designed for working professionals and shift workers. For companies, we coordinate directly with HR to build a schedule that fits team shift patterns." },
        { q: "What does the corporate program include?", a: "Corporate packages include a dedicated teacher, shift-aligned group sessions, industry-specific curriculum, premium materials, monthly attendance and progress reports for HR, and a dedicated account contact. We offer pilot cohorts so you can test the program before full rollout." },
        { q: "What is the \"guaranteed support plan\"?", a: "We guarantee structured teacher support and timely response to questions between sessions. This means your assigned teacher reviews submitted work within 48 hours and provides written feedback. Full terms are available in your enrollment agreement." },
        { q: "Can I reschedule or cancel a class?", a: "Yes. Classes can be rescheduled with at least 24 hours' notice. We understand work schedules change — please contact us via WhatsApp or email, and we'll find an alternative slot at no extra charge." },
        { q: "What technology do I need?", a: "A laptop, tablet, or phone with a stable internet connection and a working microphone is all you need. Classes run on a standard video platform — no special software required. Our self-study platform is browser-based and mobile-friendly." },
        { q: "How is my personal data used and protected?", a: "We collect only the contact and learning information needed to provide the service. Data is handled in accordance with the Philippines Data Privacy Act (RA 10173). We do not sell or share personal information with third parties." },
        { q: "Are your programs available for learners under 18?", a: "Our current programs are designed for adults aged 18 and above, including working professionals and corporate teams. If you're interested in programs for younger learners, please contact us — we are developing an appropriate offering with the right safeguards." },
        { q: "Do you partner with schools, colleges, or review centers?", a: "Yes. We can deliver supplementary English classes, conversation programs, exam-focused support, or custom live sessions for your students. Contact us to discuss a pilot, semester support, or a white-label partnership setup." }
    ];

    return (
        <section aria-labelledby="faq-heading" className="faq section" id="faq">

            <div className="container">

                <div className="faq__inner">

                    <div className="faq__sticky reveal">
                        <div className="tag">Common Questions</div>
                        <h2 id="faq-heading">Everything you need to know</h2>
                        <p>Can't find your answer? Reach us directly and we'll get back to you quickly.</p>
                        <a className="btn btn-primary" href="#contact">Contact Us</a>
                    </div>

                    <div className="faq__list" role="list">
                        {faqs.map((faq, index) => (
                            <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={index} role="listitem">
                                <button
                                    aria-expanded={openIndex === index}
                                    className="faq-item__q"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    {faq.q}

                                    <span aria-hidden="true" className="faq-item__icon">+</span>
                                </button>

                                <div className="faq-item__a" role="region">
                                    <div className="faq-item__a-inner">{faq.a}</div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Faq;