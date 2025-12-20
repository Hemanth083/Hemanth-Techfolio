import { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import "./project.css";
import img1 from "../assets/img1.png"
//import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"



const localData = {
    user: {
        projects: [
            {
                title: "Old Portfolio",
                techStack: ["JavaScript", "CSS", "HTML"],
                image: { url: img5 },
                description: "This is my previous Portfolio where it's also responsive and user-friendly ",
                liveurl: "https://my-portfolio-mu-blond.vercel.app/"
            },
            {
                title: "PokeWorld",
                techStack: ["React", "JavaScript", "CSS", "Axios", "Bootstrap"],
                image: { url: img1 },
                description: "This Application is build to display a list of pokimons using pokiAPI",
                liveurl: "https://poke-world-delta.vercel.app/"
            },
            {
                title: "Maa Foundation",
                techStack: ["React", "JavaScript", "CSS", "Tailwind CSS", "GitHub"],
                image: { url: img3 },
                description: "The Maa Foundation Platform is a web application aimed at empowering communities through educational and welfare programs.Key challenges included efficiently managing and displaying large volumes of educational resources, which required implementing pagination in React.js.Additionally, ensuring a fully responsive design across various devices involved extensive testing and fine- tuning to maintain UI consistency. ",
                liveurl: "https://maa-foundation.vercel.app"
            },
            {
                title: "RezGlobe",
                techStack: ["JavaScript", "CSS", "HTML", "PHP"],
                image: { url: img4 },
                description: "RexGloade RMS is a powerful, centralized Rate Management System designed specifically for car rental companies to streamline and automate their pricing operations. The platform enables rental businesses to create, manage, and update rates across multiple locations, seasons, vehicle categories, and customer segments—all from a single, intuitive interface.Built to eliminate manual rate adjustments, RexGloade ensures accuracy, consistency, and real- time updates across all digital platforms.Rental companies can optimize revenue by leveraging dynamic pricing rules, time - based pricing, peak - hour logic, and automated charges such as one - way fees, night fees, distance limits, and add - ons.",
                liveurl: "https://rezglobe.com/"
            },
            {
                title: "NorthStar",
                techStack: ["React", "HTML", "JavaScript", "CSS", "Redux"],
                image: { url: 'https://my-portfolio-mu-blond.vercel.app/assets/northstar.png' },
                description: "NoethStar is a React and Redux-driven cloth shopping site, provides a user-friendly interface with a diverse range of clothing items. Key features include a dynamic shopping cart, secure user authentication, and efficient state management with Redux. The platform ensures a responsive design for seamless browsing across devices, offering a modern and enjoyable shopping experience.",
                liveurl: "https://north-star-react-app.vercel.app/"
            },
            {
                title: "North Car Rentals",
                techStack: ["JavaScript", "CSS", "HTML", "PHP"],
                image: { url: img6 },
                description: "Worked on the mobile-responsive view of North Car Rentals, adding key features such as a location page, calendar functionality, and a 'Manage My Booking' page. Additionally, implemented login and signup functionality, along with client-side redemption features, and made several enhancements to improve usability and performance.",
                liveurl: "https://northcarrentals.com/"
            },
            {
                title: "Car Rerntal Booking ",
                techStack: ["JavaScript", "CSS", "HTML", "PHP"],
                image: { url: img7 },
                description: "The Car Rental Booking Application is a feature-rich web platform that I developed using PHP, JavaScript, and MySQL to streamline the end-to-end vehicle rental process. My work involved building core functionalities such as car search, price comparison, reward point application, add-on selection, and a smooth booking flow with real-time availability and pricing updates. I also contributed to developing multilingual support, responsive UI layouts, and various performance optimizations including lazy loading and caching.On the admin side, I worked on modules for managing vehicles, customers, reservations, pricing rules, offers, and reward systems. A key highlight of the project was implementing a dynamic reward engine, where users earn points based on their rental value and redeem them on future bookings.The platform also includes features like automated notifications, payment handling, office- hours fee logic, and add - on services, making it a scalable solution for car rental businesses.",
                liveurl: "https://carrentalsbooking.com/"
            },






            // {
            //     title: "RomiFinance",
            //     techStack: ["CSS", "HTML"],
            //     image: { url: img2 },
            //     description: "A simple HTML and CSS project for finance",
            //     liveurl: "https://romi-finance-lyart.vercel.app/"
            // },


        ]
    }
};

const Projects = () => {
    const [animationTriggered, setAnimationTriggered] = useState(false);
    // const [filteredProjects, setFilteredProjects] = useState([]);
    //const [uniqueTechStacks, setUniqueTechStacks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const animationTimeout = setTimeout(() => {
            setAnimationTriggered(true);
        }, 100);
        return () => clearTimeout(animationTimeout);
    }, []);

    //const stableProjectOrder = useRef(null);

    // useEffect(() => {
    //     if (localData?.user?.projects) {

    //         // Freeze order only once
    //         if (!stableProjectOrder.current) {
    //             stableProjectOrder.current = [...localData.user.projects].reverse();
    //         }

    //         // Unique stacks
    //         // const techStacks = localData.user.projects.reduce((stacks, project) => {
    //         //     project.techStack.forEach(tech => {
    //         //         const existing = stacks.find(item => item.tech === tech);
    //         //         existing ? existing.count++ : stacks.push({ tech, count: 1 });
    //         //     });
    //         //     return stacks;
    //         // }, []);

    //         //setUniqueTechStacks(techStacks);

    //         // Always use the frozen order
    //        // setFilteredProjects(stableProjectOrder.current);
    //     }
    // }, []);


    // const filterProjectsByTech = (tech) => {
    //     if (localData && localData.user && localData.user.projects) {
    //         const filtered = localData.user.projects.filter(project =>
    //             project.techStack.includes(tech)
    //         );
    //         setFilteredProjects(filtered);
    //     }
    // };

    // const resetFilter = () => {
    //     setFilteredProjects([]);
    // };

    const openModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };
    const projects = [...localData.user.projects].reverse(); // optional

    return (
        <div style={{ height: "auto" }} className={`slide-in-left ${animationTriggered ? 'show' : ''}`}>
            <div className="w-100 bg-dark p-5 d-flex flex-column align-items-center justify-content-center">
                <Container>
                    <h1 className="header border-bottom mb-5">Projects</h1>
                    {/* <div className="mb-3 w-100 d-flex align-items-center justify-content-center flex-row pt-4 pb-4">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className="bg-transparent border-light custom-dropdown-toggle">
                                Filter by Technology
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="custom-dropdown-menu bg-white">
                                {uniqueTechStacks.map((stack, index) => (
                                    <Dropdown.Item key={index} onClick={() => filterProjectsByTech(stack.tech)}>
                                        {`${stack.tech} (${stack.count})`}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button onClick={resetFilter} type="button" className="ms-4 bg-transparent border-light custom-button">Reset</Button>
                    </div> */}
                    <Row>
                        {(
                            projects.map((project, index) => (
                                <Col key={index} md={6} className="mb-5">
                                    <div className="curser project-image-container " style={{ height: "70%" }} onClick={() => openModal(project)}>
                                        <img className="img-fluid project-image" src={project.image.url} alt={`Project ${index}`} />
                                    </div>
                                    <div className=" h-25 pt-3 pl-3 pb-5 bg-black rounded-1 titlr opacity-50">
                                        <p className="header">{project.techStack.join(', ')}</p>
                                        <h1 className="header">{project.title}</h1>
                                    </div>
                                </Col>
                            ))
                        )}
                    </Row>
                </Container>
            </div>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header className='header-details' closeButton>
                    <Modal.Title className='header-name' >{selectedProject && selectedProject.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark d-flex w-100 align-items-center justify-content-center big flex-column'>
                    {selectedProject && (
                        <>
                            <img width='70%' src={selectedProject.image.url} alt="Selected Project"></img>
                            <p className='mt-4 text-white'>Tech Stack: {selectedProject.techStack.join(', ')}</p>
                            <p style={{ textAlign: "justify" }} className='w-100 text-white'>{selectedProject.description}</p>
                            <a href={selectedProject.liveurl} className='button w-25 bg-transparent text-white text-center text-decoration-none' style={{ borderBottom: "2px solid salmon", borderTop: "2px solid salmon", borderLeft: "2px solid transparent", borderRight: "2px solid transparent" }} target="_blank" rel="noopener noreferrer">Live</a>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Projects;
