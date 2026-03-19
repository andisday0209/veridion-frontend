import { useState, useEffect } from 'react';

function Contact() {
    const [activeTab, setActiveTab] = useState('companies');
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#contact-companies') {
                setActiveTab('companies');
            } else if (window.location.hash === '#contact-students') {
                setActiveTab('students');
            }
        };

        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleSubmit = (e, type) => {
        e.preventDefault();
        const form = e.target;
        let valid = true;

        form.querySelectorAll('[required]').forEach(field => {
            field.style.borderColor = '';
            if (!field.value.trim()) {
                field.style.borderColor = '#e03d2f';
                valid = false;
            }
        });

        if (valid) {
            setSuccessMessage(type);
        }
    };

    return (
        <section aria-labelledby="contact-heading" className="contact section" id="contact" style={{position: 'relative'}}>
            <div id="contact-companies" style={{position: 'absolute', top: '-80px', visibility: 'hidden'}}></div>
            <div id="contact-students" style={{position: 'absolute', top: '-80px', visibility: 'hidden'}}></div>

            <div className="container">

                <div className="text-center reveal">
                    <div className="tag">Get in Touch</div>
                    <h2 id="contact-heading">Talk to Veridion about training, IELTS coaching, or a school partnership</h2>
                    <p style={{ maxWidth: '480px', margin: '10px auto 0' }}>Choose the path below. We'll respond within one business day.</p>
                </div>

                <div aria-label="Contact form for companies or students" className="contact__tabs" role="tablist">
                    <button
                        aria-controls="form-companies"
                        aria-selected={activeTab === 'companies'}
                        className={`contact__tab ${activeTab === 'companies' ? 'active' : ''}`}
                        onClick={() => { 
                            setActiveTab('companies'); 
                            setSuccessMessage(null); 
                            window.history.replaceState(null, null, '#contact-companies');
                        }}
                        role="tab"
                    >
                        🏢 For Companies
                    </button>

                    <button
                        aria-controls="form-students"
                        aria-selected={activeTab === 'students'}
                        className={`contact__tab ${activeTab === 'students' ? 'active' : ''}`}
                        onClick={() => { 
                            setActiveTab('students'); 
                            setSuccessMessage(null); 
                            window.history.replaceState(null, null, '#contact-students');
                        }}
                        role="tab"
                    >
                        🎯 For Students
                    </button>
                </div>

                <div className="contact__forms">
                    {activeTab === 'companies' && !successMessage && (
                        <form aria-labelledby="tab-companies" className="contact__form active" id="form-companies" noValidate onSubmit={(e) => handleSubmit(e, 'companies')} role="tabpanel">

                            <div className="form-group">
                                <label htmlFor="c-name">Full name <span aria-label="required" className="req">*</span></label>
                                <input autoComplete="name" id="c-name" name="name" placeholder="Your full name" required type="text"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="c-company">Company name <span aria-label="required" className="req">*</span></label>
                                <input autoComplete="organization" id="c-company" name="company" placeholder="Your company" required="" type="text"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="c-email">Work email <span aria-label="required" className="req">*</span></label>
                                <input autoComplete="email" id="c-email" name="email" placeholder="you@company.com" required="" type="email"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="c-whatsapp">WhatsApp number <span aria-label="required" className="req">*</span></label>
                                <input autoComplete="tel" id="c-whatsapp" name="whatsapp" placeholder="+63 9XX XXX XXXX" required="" type="tel"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="c-employees">Team size</label>
                                <select id="c-employees" name="employees">
                                    <option value="">Select team size</option>
                                    <option>1–10 employees</option>
                                    <option>11–50 employees</option>
                                    <option>51–200 employees</option>
                                    <option>200+ employees</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="c-industry">Industry</label>
                                <select id="c-industry" name="industry">
                                    <option value="">Select industry</option>
                                    <option>BPO / Call Centre</option>
                                    <option>Healthcare</option>
                                    <option>Hospitality &amp; Tourism</option>
                                    <option>Finance &amp; Banking</option>
                                    <option>Technology</option>
                                    <option>Manufacturing</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="form-group form-group--full">
                                <label htmlFor="c-message">Tell us about your team's English goals</label>
                                <textarea id="c-message" name="message" placeholder="E.g. We have 20 customer service agents who need better spoken English for international calls..."></textarea>
                            </div>

                            <div className="form-group form-group--full">
                                <p className="hint">By submitting this form you agree to our <a href="#" style={{color:'var(--green-mid);'}}>Privacy Policy</a>. We will use your details only to respond to this enquiry.</p>
                            </div>


                            <div className="form-group form-group--full">
                                <button className="btn btn-primary btn-lg" type="submit">Request Corporate Demo →
                                </button>
                            </div>
                        </form>
                    )}

                    {activeTab === 'students' && !successMessage && (
                        <form aria-labelledby="tab-students" className="contact__form active" id="form-students" noValidate onSubmit={(e) => handleSubmit(e, 'students')} role="tabpanel">

                            <div className="form-group">
                                <label htmlFor="s-name">Full name <span aria-label="required" className="req">*</span></label>
                                <input autoComplete="name" id="s-name" name="name" placeholder="Your full name" required type="text"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="s-email">Email address <span aria-label="required" className="req">*</span></label>
                                <input autoComplete="email" id="s-email" name="email" placeholder="you@email.com" required="" type="email"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="s-whatsapp">WhatsApp number <span aria-label="required" className="req">*</span></label>
                                <input autoComplete="tel" id="s-whatsapp" name="whatsapp" placeholder="+63 9XX XXX XXXX" required="" type="tel"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="s-goal">Your main goal <span aria-label="required" className="req">*</span></label>
                                <select id="s-goal" name="goal" required="">
                                    <option value="">Select your goal</option>
                                    <option>IELTS exam preparation</option>
                                    <option>PTE exam preparation</option>
                                    <option>Business English for work</option>
                                    <option>Conversational fluency</option>
                                    <option>Academic writing</option>
                                    <option>General English improvement</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="s-level">Current English level</label>
                                <select id="s-level" name="level">
                                    <option value="">Not sure (we'll assess)</option>
                                    <option>Beginner (A1–A2)</option>
                                    <option>Intermediate (B1–B2)</option>
                                    <option>Upper-intermediate (B2+)</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="s-schedule">Preferred schedule</label>
                                <select id="s-schedule" name="schedule">
                                    <option value="">Select schedule preference</option>
                                    <option>Early mornings (5–8 AM)</option>
                                    <option>Mornings (8–12 PM)</option>
                                    <option>Afternoons (12–5 PM)</option>
                                    <option>Evenings (5–9 PM)</option>
                                    <option>Weekends only</option>
                                </select>
                            </div>

                            <div className="form-group form-group--full">
                                <label htmlFor="s-message">Anything else we should know?</label>
                                <textarea id="s-message" name="message" placeholder="E.g. I work night shifts, I'm aiming for Band 7, I've been studying English for 2 years..."></textarea>
                            </div>

                            <div className="form-group form-group--full">
                                <p className="hint">By submitting this form you agree to our <a href="#" style={{color:'var(--green-mid);'}}>Privacy Policy</a>. We'll use your details only to respond to this enquiry. We do not enrol learners under 18.</p>
                            </div>

                            <div className="form-group form-group--full">
                                <button className="btn btn-orange btn-lg" type="submit">Book My Trial Class →</button>
                            </div>
                        </form>
                    )}

                    {successMessage === 'companies' && (
                        <div className="form-success show">
                            <div style={{fontSize: '2.5rem', marginBottom: '12px'}}>✅</div>
                            <h3>Demo request received!</h3>
                            <p>We'll be in touch within one business day to schedule your corporate demo.</p>
                        </div>
                    )}

                    {successMessage === 'students' && (
                        <div className="form-success show">
                            <div style={{fontSize: '2.5rem', marginBottom: '12px'}}>🎉</div>
                            <h3>Trial class booked!</h3>
                            <p>We'll WhatsApp or email you within one business day to confirm your slot.</p>
                        </div>
                    )}
                </div>

                <div className="contact__aside reveal">

                    <div className="contact-info-card">
                        <div aria-hidden="true" className="contact-info-card__icon">💬</div>
                        <div>
                            <div className="contact-info-card__title">WhatsApp</div>
                            <div className="contact-info-card__val">
                                <a href="https://wa.me/639619274479" rel="noopener" style={{color: 'var(--green-mid)', fontWeight: '600',}} target="_blank">+63 961 927 4479</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-info-card">
                        <div aria-hidden="true" className="contact-info-card__icon">📧</div>
                        <div>
                            <div className="contact-info-card__title">Email</div>
                            <div className="contact-info-card__val"><a href="mailto:info@veridionenglish.com">info@veridionenglish.com</a></div>
                        </div>
                    </div>

                    <div className="contact-info-card">
                        <div aria-hidden="true" className="contact-info-card__icon">📍</div>
                        <div>
                            <div className="contact-info-card__title">Cebu City Branch</div>
                            <div className="contact-info-card__val">In-person classes coming soon in Cebu City, Philippines</div>
                        </div>
                    </div>

                    <div className="contact-info-card"><div aria-hidden="true" className="contact-info-card__icon">🌐</div>
                        <div>
                            <div className="contact-info-card__title">Website</div>
                            <div className="contact-info-card__val">
                                <a href="https://veridionenglish.com/">veridionenglish.com</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;