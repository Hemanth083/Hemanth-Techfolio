import "./resume.css";
import { ProgressBar, Button } from "react-bootstrap";
import { useState } from "react";

const Resume = () => {
    // Local data
    const userData = {
        user: {
            timeline: [
                {
                    forEducation: true,
                    company_name: "AMC Engineering College",
                    startDate: "2020-9-18",
                    endDate: "2024-06-10",
                    jobTitle: "Bachelor of Engineering in Computer Science",
                    summary: "Studied various aspects of computer science."
                },
                {
                    forEducation: true,
                    company_name: "Sadhguru Sainath PU College",
                    startDate: "2018-05-18",
                    endDate: "2020-05-10",
                    jobTitle: "Pre-university course",
                    summary: "In PUC Computer Science, we study programming, data structures, algorithms, and IT fundamentals to prepare for advanced computer science education."
                },
                {
                    forEducation: true,
                    company_name: "St Miras High School",
                    startDate: "2007-02-18",
                    endDate: "2018-04-01",
                    jobTitle: "Secondary School Leaving Certificate",
                    summary: "In school, we study a wide range of subjects to gain knowledge, develop critical thinking skills, and prepare for future careers and life challenges."
                },
                {
                    forEducation: false,
                    company_name: "Alvo Mobility LLP",
                    startDate: "2024-09-12",
                    endDate: "Present",
                    jobTitle: "Web Developer (Front-end developer)",
                    summary: " Developed and delivered scalable web applications in collaboration with cross - functional teams. Ensured optimal user experiences through performance optimization and responsive design principles. Led development of key features, managing all phases from planning to deployment. Enhanced code quality, SEO performance, and project outcomes by contributing ideas and supporting teammates. Implemented reward points system allowing users to earn based on reservation prices for future bookings."
                },
                {
                    forEducation: false,
                    company_name: "ADM Education and Welfare Society",
                    startDate: "2024-05-18",
                    endDate: "2024-07-25",
                    jobTitle: "Web Developer",
                    summary: "Maa Foundation is a social-impact web platform designed to support women empowerment, skill development, and community welfare initiatives. The purpose of the project is to create an accessible digital space where women can learn, connect, and benefit from programs that help them achieve financial independence and personal growth."
                },

                // Add more data as needed
            ],
            skills: [
                { name: "HTML ", percentage: 85 },
                { name: "CSS ", percentage: 90 },
                { name: "JavaScript", percentage: 70 },
                { name: "React", percentage: 75 },
                { name: "PHP", percentage: 55 },
                { name: "GitHub ", percentage: 60 },
                { name: "Bootstrap", percentage: 60 },
                { name: "Tailwind", percentage: 50 },

                // Add more skills as needed
            ]
        }
    };

    const [animationTriggered, setAnimationTriggered] = useState(true);

    const formatYear = (year) => {
        return year.substring(0, 10);
    };

    return (
        <div className={`h-100 slide-in-left ${animationTriggered ? 'show' : ''}`}>
            <div className="w-100 h-100 pt-3 d-flex align-items-start gap-5 resumeAlign justify-content-center bg-dark">
                <div style={{ width: "60%" }} className="d-flex resumeElement align-items-start justify-content-start flex-column">
                    <h1 className="w-75 mb-5 border-bottom text-secondary heading">Experience</h1>
                    <div className="w-100 d-flex align-items-center justify-content-center flex-column education w-75">
                        {userData.user.timeline.map((item, index) => {
                            if (!item.forEducation) {
                                return (
                                    <div className={`bg-black width mt-3 ${index % 2 === 0 ? 'bg-opacity-50' : 'bg-opacity-25'} p-4`} key={index}>
                                        <h2 className="header fs-5">{item.company_name} ({formatYear(item.startDate)}, {formatYear(item.endDate)})</h2>
                                        <h3 className="header fs-1">{item.jobTitle}</h3>
                                        <p className="header text-secondary">{item.summary}</p>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <h1 className="w-75 mb-5  mt-5 border-bottom text-secondary heading">Education</h1>
                    <div className="w-100 d-flex align-items-center justify-content-center flex-column education">
                        {userData.user.timeline.map((item, index) => {
                            if (item.forEducation) {
                                return (
                                    <div className={`bg-black width mt-3 ${index % 2 === 0 ? 'bg-opacity-25' : 'bg-opacity-50'} p-4`} key={index}>
                                        <h2 className="header fs-5">{item.company_name} ({formatYear(item.startDate)}, {formatYear(item.endDate)})</h2>
                                        <h3 className="header fs-1">{item.jobTitle}</h3>
                                        <p className="header text-secondary">{item.summary}</p>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>

                </div>
                <div style={{ width: '30%' }} className="resumeSkills">
                    <h2 className="header resumeSkills mb-5 border-bottom h-100 text-start">Skills</h2>
                    {userData.user.skills.map((skill, index) => (
                        <div key={index} className="d-flex align-items-start flex-column w-100 justify-content-center">
                            <p style={{ marginBottom: "0" }} className="header">{skill.name}</p>
                            <ProgressBar
                                className="w-100 mb-3 salmon-progress-bar"
                                key={index}
                                now={skill.percentage}
                                label={`${skill.percentage}%`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-100 text-center bg-dark">
                <a href="https://drive.google.com/uc?export=download&id=1npJoa3_xJAQlrOI0u57NouTgzb4_E5r7">
                    <Button type="text" className="Nothing border-dark mt-5 downloadCV">Download CV</Button>
                </a>
            </div>
        </div>
    );
};

export default Resume;
