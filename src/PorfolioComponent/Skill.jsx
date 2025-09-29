import htmlLogo from '../assets/img/html-5.png';
import cssLogo from '../assets/img/css-3.png';
import jsLogo from '../assets/img/js.png';
import reactLogo from '../assets/react.svg';

export function Skill() {
    return (
        <article className="skill-section">
             <h2 id="tab-heading">My Skills</h2>
             <div className="skill-container">
                 <div className="skill">
                    <div className="skill-logo-container"><img src={htmlLogo}alt="logo"  className='skill-logo' /></div>
                    <div className="skill-text">HTML</div>
                 </div>
                 <div className="skill">
                    <div className="skill-logo-container"><img src={cssLogo} alt="logo" className='skill-logo' /></div>
                    <div className="skill-text">CSS</div>
                 </div>
                 <div className="skill">
                    <div className="skill-logo-container"><img src={jsLogo} alt="logo" className='skill-logo' /></div>
                    <div className="skill-text">JavaScript</div>
                 </div>
                 <div className="skill">
                    <div className="skill-logo-container"><img src={reactLogo} alt="logo" className='skill-logo' /></div>
                    <div className="skill-text">React</div>
                 </div>
             </div>
        </article>
    );
}

