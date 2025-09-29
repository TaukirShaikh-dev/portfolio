import image from '../assets/img/user8.png';
import Noteapp from '../assets/img/Noteapp.png';
import Weatherapp from '../assets/img/Weatherapp.png';
import Ecommercecartapp from '../assets/img/Ecommercecartapp.png';
import Expencetrackerapp from '../assets/img/Expencetrackerapp.png';
import { Link } from 'react-router-dom';

export function Project() {
    const projectData = [
        { title: 'Note App', desc: 'Note-taking app with CRUD functionality and localStorage support built in React', Projectname: 'NoteApp', image: Noteapp },
        { title: 'Weather App', desc: 'Simple Weather app where user type city name to view live weather info', Projectname: 'WeatherApp', image: Weatherapp },
        { title: 'Expencetracker App', desc: 'Expencetracker app with add, edit, delete, Category filtering and Status filtering features.', Projectname: 'ExpencetrackerApp', image: Expencetrackerapp },
        { title: 'Ecommercecart App', desc: 'Lightweight e-Commersecart app with add-to-cart, qunatity update and subtotal/tax/total calculation', Projectname: 'EcommercecartApp', image: Ecommercecartapp }
    ];

    return (
        <article className="project-container">
            <div className="info">
                <h2 className="project-heading">My Project</h2>
                <p className="project-text">here are some Project I have buit using React, Javasctipt and CSS</p>
            </div>

            <div className="card-container">
                {
                    //for each element of projectData create card Structure
                    projectData.map((obj, index) => (
                        //fill each element data inside card 
                        <div className="card" key={index}>
                            <div className="project-image-container"><img src={obj.image} alt="p-image" className='p-image' /></div>
                            <div className="project-info-container">
                                <h3 className="p-title">Project Title: {obj.title}</h3>
                                <p className="p-desc">{obj.desc}</p>
                                <p className="p-tech"><span className="badge">React</span> <span className="badge">JavaScript</span> <span className="badge">CSS</span></p>
                                <p className="p-button"><Link to={`/project/${obj.Projectname}`} className="demo-btn">Live Demo</Link></p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <p className="see-more-text">Want to see more?</p>
        </article>
    );
}