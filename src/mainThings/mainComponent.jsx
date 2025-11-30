import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import About from '../Components/about';
import Resume from '../Components/resume';
import myImage from '../assets/myImage.jpg'
import Projects from '../Components/project';
import Skills from '../Components/skills';
import Contact from '../Components/contact';
import menu from '../assets/menu.svg';
import "./mainComponent.css"

// Sample local data


function MainComponent() {
    const [currentPage, setCurrentPage] = useState("About");
    // const [data, setData] = useState(localData); // Use local data
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        // Simulate data fetching if needed
        setLoading(false);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const aboutPosition = document.getElementById('about').offsetTop;
            const resumePosition = document.getElementById('resume').offsetTop;
            const projectsPosition = document.getElementById('projects').offsetTop;
            const skillsPosition = document.getElementById('skills').offsetTop;
            const contactPosition = document.getElementById('contact').offsetTop;

            if (scrollPosition < aboutPosition) {
                setActiveSection('About');
            } else if (scrollPosition >= aboutPosition && scrollPosition < resumePosition) {
                setActiveSection('About');
            } else if (scrollPosition >= resumePosition && scrollPosition < projectsPosition) {
                setActiveSection('Resume');
            } else if (scrollPosition >= projectsPosition && scrollPosition < skillsPosition) {
                setActiveSection('Projects');
            } else if (scrollPosition >= skillsPosition && scrollPosition < contactPosition) {
                setActiveSection('Skills');
            } else {
                setActiveSection('Contact');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleNavClick = (page) => {
        const section = document.getElementById(page.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };




    if (loading) return <div><h1 className='text-dark'>Loading...</h1></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="d-flex flex-row mainContainer">
            <Navbar className="flex-column align-items-center justify-content-center nav fixed-top" bg="dark" variant="dark">
                <img src={myImage} className='rounded-5 logo' width="70px" height="auto" alt="" />
                <Nav className="d-flex w-100 justify-content-center align-items-center links flex-column h-75">
                    <Link
                        to="about"
                        smooth={true}
                        duration={250}
                        style={{ textDecoration: 'none' }}
                        className={`NavButtons text-secondary ${activeSection === 'About' ? 'text-white' : ''}`}
                        onClick={() => handleNavClick('About')}
                    >
                        About
                    </Link>
                    <Link
                        to="resume"
                        smooth={true}
                        duration={250}
                        style={{ textDecoration: 'none' }}
                        className={`NavButtons text-secondary ${activeSection === 'Resume' ? 'text-white' : ''}`}
                        onClick={() => handleNavClick('Resume')}
                    >
                        Resume
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={250}
                        style={{ textDecoration: 'none' }}
                        className={`NavButtons text-secondary ${activeSection === 'Projects' ? 'text-white' : ''}`}
                        onClick={() => handleNavClick('Projects')}
                    >
                        Projects
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={250}
                        style={{ textDecoration: 'none' }}
                        className={`NavButtons text-secondary ${activeSection === 'Skills' ? 'text-white' : ''}`}
                        onClick={() => handleNavClick('Skills')}
                    >
                        Skills
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={250}
                        style={{ textDecoration: 'none' }}
                        className={`NavButtons text-secondary ${activeSection === 'Contact' ? 'text-white' : ''}`}
                        onClick={() => handleNavClick('Contact')}
                    >
                        Contact
                    </Link>
                </Nav>
            </Navbar>
            {showMenu && (
                <div className="menu-content">
                    <button className="close-button" onClick={() => setShowMenu(false)}>
                        &times;
                    </button>
                    <div className="menu-items">
                        <Link
                            to="about"
                            smooth={true}
                            style={{ color: 'white', textDecoration: 'none' }}
                            className={`NavButtons ${activeSection === 'About' ? 'active' : ''}`}
                            onClick={() => handleNavClick('About')}
                        >
                            About
                        </Link>
                        <Link
                            to="resume"
                            smooth={true}
                            style={{ color: 'white', textDecoration: 'none' }}
                            className={`NavButtons ${activeSection === 'Resume' ? 'active' : ''}`}
                            onClick={() => handleNavClick('Resume')}
                        >
                            Resume
                        </Link>
                        <Link
                            to="projects"
                            smooth={true}
                            style={{ color: 'white', textDecoration: 'none' }}
                            className={`NavButtons ${activeSection === 'Projects' ? 'active' : ''}`}
                            onClick={() => handleNavClick('Projects')}
                        >
                            Projects
                        </Link>
                        <Link
                            to="skills"
                            smooth={true}
                            style={{ color: 'white', textDecoration: 'none' }}
                            className={`NavButtons ${activeSection === 'Skills' ? 'active' : ''}`}
                            onClick={() => handleNavClick('Skills')}
                        >
                            Skills
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            style={{ color: 'white', textDecoration: 'none' }}
                            className={`NavButtons ${activeSection === 'Contact' ? 'active' : ''}`}
                            onClick={() => handleNavClick('Contact')}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
            <div className='Content'>
                <div id='about' style={{ background: activeSection === 'About' ? '#f0f0f0' : 'transparent' }}>
                    <About id="about" />
                </div>
                <div id='resume' style={{ background: activeSection === 'Resume' ? '#f0f0f0' : 'transparent' }}>
                    <Resume id="resume" />
                </div>
                <div id='projects' style={{ background: activeSection === 'Projects' ? '#f0f0f0' : 'transparent' }}>
                    <Projects id="projects" />
                </div>
                <div id='skills' style={{ background: activeSection === 'Skills' ? '#f0f0f0' : 'transparent' }}>
                    <Skills id="skills" />
                </div>
                <div id='contact' style={{ background: activeSection === 'Contact' ? '#f0f0f0' : 'transparent' }}>
                    <Contact id="contact" />
                </div>
            </div>
            <img src={menu} alt="Menu" className="menu-icon" onClick={() => setShowMenu(!showMenu)} />
        </div>
    );
}

export default MainComponent;
