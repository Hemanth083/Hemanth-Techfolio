import React, { useEffect, useState } from 'react';
import './project.css';
import emailjs from "emailjs-com";
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                alert("Message sent successfully!");
                e.target.reset();
            })
            .catch((err) => {
                console.error("EmailJS Error:", err);
                alert("Failed to send message!");
            });
    };

    const userData = {
        user: {
            about: {
                phoneNumber: "6362919752",
                address: "#172 ,5th cross ,Raghavendra Layout ,Begur ,Bengaluru 560068",
            },
            email: "hemantheaddress@gmail.com",
        },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const animationTimeout = setTimeout(() => {
            setAnimationTriggered(true);
        }, 100);
        return () => clearTimeout(animationTimeout);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div style={{ height: '102vh' }} className={`w-100 bg-dark d-flex align-items-center flex-column justify-content-start slide-in-left ${animationTriggered ? 'show' : ''}`}>
            <div style={{ width: '80%' }}>
                <h1 className='header mt-5 mb-5 border-bottom'>Contact</h1>
                {userData && userData.user && userData.user.about && (
                    <div className={`d-flex align-items-center justify-content-between mb-5 ${menuOpen ? 'menu-open' : ''} AlignContact flex-row`}>
                        <div className='d-flex flex-column'>
                            <h3 className='header'>Phone Number:</h3>
                            <p style={{ color: "salmon" }}>{userData.user.about.phoneNumber}</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <h3 className='header'>Address:</h3>
                            <p style={{ color: "salmon" }}>{userData.user.about.address}</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <h3 className='header'>Email:</h3>
                            <p style={{ color: "salmon" }}>{userData.user.email}</p>
                        </div>
                    </div>
                )}
            </div>
            <Form style={{ width: "80%" }} onSubmit={sendEmail}>
                <div className="d-flex flex-row w-100 form">

                    {/* Left Section */}
                    <div className="w-50 formsub mr-4">

                        <Form.Group>
                            <Form.Control
                                required
                                name="from_name"
                                className="mb-4 inputfield"
                                type="text"
                                placeholder="Full Name"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control
                                required
                                name="from_email"
                                className="mb-4 inputfield"
                                type="email"
                                placeholder="Email"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control
                                required
                                name="title"
                                className="mb-5 inputfield"
                                type="text"
                                placeholder="Subject"
                            />
                        </Form.Group>

                        <Button
                            style={{
                                background: "transparent",
                                borderRadius: "0px",
                                border: "none",
                                outline: "none",
                                boxShadow: "none",
                                borderTop: "2px solid salmon",
                                borderBottom: "2px solid salmon",
                            }}
                            type="submit"
                            className="button text-secondary desktopview"
                        >
                            Send Message
                        </Button>

                    </div>

                    {/* Right Section */}
                    <div className="w-50 formsub">
                        <Form.Group>
                            <Form.Control
                                required
                                as="textarea"
                                name="message"
                                rows={6}
                                placeholder="Enter your message"
                                className="inputfield"
                            />
                        </Form.Group>
                    </div>
                    <Button
                        style={{
                            background: "transparent",
                            borderRadius: "0px",
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            borderTop: "2px solid salmon",
                            borderBottom: "2px solid salmon",
                            display: "none",
                        }}
                        type="submit"
                        className="button text-secondary mobileview"
                    >
                        Send Message
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Contact;
