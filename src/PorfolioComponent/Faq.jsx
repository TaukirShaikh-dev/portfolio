import { useState } from "react";

export function Faq() {
    const [showIndex, setShowIndex] = useState(null);

    const qa = [{ question: 'What Technologies do you use?', answer: 'I mainly use HTML, CSS, JavaScript and sometimes small libraries.' },
    { question: 'Are you available for freelance work?', answer: 'Yes! i am open to freelance and collaboration project.' },
    { question: 'How did you build this site?', answer: 'Using HTML, CSS and JavaScript step by step.' },
    { question: 'Where can i see your code?', answer: 'You can explore project in the project section.' }];

    function handleAnswer(clickdquestionIndex) {
       //show clicked question answer
       setShowIndex(showIndex === clickdquestionIndex ? null : clickdquestionIndex);
    }

    return (
        <section id="faq-section">
            <h2 id="tab-heading">Frequently Asked Question</h2>

            <article className="faq">
                {
                    //for each element of qa array create faq-item structure
                    qa.map((obj, index) => (
                          //fill each element data inside faq-item
                        <div className="faq-item" key={index}>
                            <div className="faq-question" onClick={() => handleAnswer(index)}>{obj.question}
                                <span className="arrow-icon">{showIndex === index ? '-' : '+'}</span>
                            </div>
                            <p className={`faq-answer ${showIndex === index ? 'visible' : ''}`}>{obj.answer}</p>
                        </div>
                    ))
                }
            </article>
        </section>
    );
}

