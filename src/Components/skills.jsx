import React, { useEffect, useState } from 'react';
import './project.css';
import htmlLogo from '../assets/htmlLogo.png';
import cssLogo from '../assets/cssLogo.png';
import jsLogo from '../assets/javaScriptLogo.webp';
import reactLogo from '../assets/reactLogo.webp';
import vercelLogo from '../assets/vercelLogo.svg';
import reduxLogo from '../assets/resuxLogo.png';
import githubLogo from '../assets/gitHubLogo.png';
import php from '../assets/php.png';

// import bootstrapLogo from '../assets/bootstrap-logo.png';
// import tailwindLogo from '../assets/tailwind-logo.png'

const Skills = ({ useData }) => {
    const [animationTriggered, setAnimationTriggered] = useState(false);

    
    useEffect(() => {
        window.scrollTo(0, 0);
        // Trigger the animation after a delay to ensure the component is mounted
        const animationTimeout = setTimeout(() => {
            setAnimationTriggered(true);
        }, 100);
        // Clear the timeout on component unmount
        return () => clearTimeout(animationTimeout);
    }, []);
    const skillsData = [
        { name: 'HTML', image: htmlLogo },
        { name: 'CSS', image: cssLogo },
        { name: 'Javascript', image: jsLogo },
        { name: 'React', image: reactLogo },
        { name: 'Vercel', image: vercelLogo },
        { name: 'Redux', image: reduxLogo },
        { name: 'Github', image: githubLogo },
        { name: 'PHP', image: php },
        // { name: 'Bootstrap', image: bootstrapLogo },
        // { name: 'Tailwind', image: tailwindLogo },
    ];

    return (
        <div className={`w-100 mb-5 d-flex align-items-center justify-content-center bg-dark slide-in-left ${animationTriggered ? 'show' : ''}`}>
            <div style={{ width: '80%' }}>
                <h1 className="header fs-1 pt-5 pd-5 border-bottom">Skills</h1>
                <div className="skills-container">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <img loading='lazy' src={skill.image} alt={`Skill ${index}`} />
                            <div className="skill-label w-100 h-100 text-center">
                                <p className='header fs-3'>{skill.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Skills;
