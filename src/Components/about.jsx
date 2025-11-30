import { useState, useEffect, useRef } from 'react';
import myImage from '../assets/MyImage4.jpg';
import './styles.css';
import gitLogo from "../assets/gitHubLogo.png";
import linked from "../assets/linked.webp";
import x from "../assets/x.webp";
import insta from '../assets/insta.webp';
import webDev from '../assets/images.png';

const localData = {
    user: {
        about: {
            phoneNumber: '6362919752',
        },
        email: 'example@example.com',
        social_handles: [
            { image: { url: gitLogo }, link: 'https://github.com/hemanth083' },
            {
                image: { url: insta }, link: 'https://www.instagram.com/_____.hemanth._____/'
            },
            { image: { url: x }, link: 'https://x.com/Hemanth__N' },
            { image: { url: linked }, link: 'https://www.linkedin.com/in/hemanth-n-45b165278/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
        ],
        services: [
            { image: { url: webDev }, name: 'Front-End development', desc: 'I build applications', },
        ],
    },
};

const About = () => {
    const [userData, setUserData] = useState(localData);

    const [expanded, setExpanded] = useState(false);
    const boxRefs = useRef([]);

    // const boxRefs1 = useRef([]);
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        let current = 0;

        // Cycle every 3 seconds
        const interval = setInterval(() => {
            setActiveIndex(current);
            current = (current + 1) % userData.user.social_handles.length;
        }, 1000);

        return () => clearInterval(interval);
    }, [userData.user.social_handles.length]);
    useEffect(() => {
        let scrolling = false;
        let animationFrame;

        // Physics values
        const gravity = 1;
        const friction = 0.4;

        const velocities = [];
        const positions = [];

        // Initialize physics arrays
        userData.user.social_handles.forEach((_, i) => {
            velocities[i] = { x: 0, y: 0 };
            positions[i] = { x: 0, y: 0 };
        });

        const handleScroll = () => {
            scrolling = true;

            // Give each box a small random push
            velocities.forEach(v => {
                v.x += (Math.random() - 0.5) * 2;
                v.y += (Math.random() - 1.5) * 2; // upward force
            });
        };

        const animate = () => {
            velocities.forEach((v, i) => {
                // Apply physics forces
                v.y += gravity;
                v.x *= friction;
                v.y *= friction;

                // Update positions
                positions[i].x += v.x;
                positions[i].y += v.y;

                // Return to origin when scroll stops
                if (!scrolling) {
                    positions[i].x *= 0.9;
                    positions[i].y *= 0.9;
                }

                // Apply CSS transform to container
                const el = boxRefs.current[i];
                if (el) {
                    el.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
                }
            });

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        let stopTimer;
        const onScroll = () => {
            handleScroll();

            clearTimeout(stopTimer);
            stopTimer = setTimeout(() => {
                scrolling = false; // Return gracefully
            }, 150);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setExpanded(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ height: 'auto' }} className={`fade-in-left ${userData ? 'show' : ''}`}>
            <div className="d-flex flex-row about">
                {userData && userData.user && userData.user.about && (
                    <div className="bg-dark text-white Image-Container d-flex align-items-center about-Container justify-content-center flex-row w-100">
                        <div className="w-50 h-100 cropped-image-container d-flex align-items-center justify-content-center">
                            <img src={myImage} alt="Profile" className={`img-wrapper ${expanded ? "img-expanded" : ""}`} />
                        </div>
                        <div className="about-content w-50 h-50 d-flex align-items-center justify-content-center">
                            <div className="w-75 d-flex align-items-start justify-content-start flex-column">
                                <p className="text-secondary modal-title paragraph">Front-end developer</p>
                                <h1 className="display-1 Name">Hemanth</h1>
                                <p className="text-secondary paragraph">
                                    Frontend Developer with 1+ year of experience building scalable, responsive, and SEO-optimized web applications. Skilled in React, JavaScript, Tailwind, and PHP, with a strong focus on clean UI, performance, and usability. I have delivered production-ready features, improved site performance, and built complete end-to-end solutions including reward systems and multilingual support. I enjoy turning complex requirements into intuitive user experiences and consistently contribute to improving product quality and team outcomes.
                                </p>
                                <div className="social-media justify-content-between align-items-center d-flex mt-3">
                                    {userData.user.social_handles.map((social, index) => (
                                        <div
                                            className={`Social-images z-3`}
                                            key={index}
                                            ref={el => (boxRefs.current[index] = el)}
                                        >
                                            <a href={social.link} target="_blank" rel="noopener noreferrer">
                                                <img className={`MediaImage  ${activeIndex === index ? "auto-hover" : ""}`} width="20px" ref={el => (boxRefs.current[index] = el)} src={social.image.url} alt="" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="WhatIDo w-100 bg-white d-flex align-items-center flex-column justify-content-top pt-5">
                <div className="d-flex flex-column pb-5 align-items-center bg-dark justify-content-center w-100">
                    <h1 className="heading text-start bg-white p-3 w-75 border-bottom Wahat">What <span className="I">I</span> Do</h1>
                    {userData && userData.user && userData.user.services && userData.user.services.map((service, index) => (
                        <div className="d-flex w-75 mb-4 mt-5 align-items-center justify-content-between flex-row Services-animation" key={index}>
                            <div>
                                <img src={service.image.url} width="250px" alt={`Service Image ${index}`} />
                            </div>
                            <div style={{ width: '100%' }} className="d-flex h-100 align-items-center justify-content-center flex-column">
                                <p className="TestimonialText w-75">{service.name}</p>
                                <p className="TestimonialText text-secondary w-75">{service.desc}</p>
                                {/* <p className="TestimonialText text-secondary w-75">{service.charge}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
