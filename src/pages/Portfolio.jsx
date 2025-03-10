import React from 'react';
import Project from '../components/Project'; 
import websnapprImage from '../assets/websnappr20250103-73825-skcfyc.png';
import jtBlueImage from '../assets/JT-blue.png';
import weatherDashboardImage from '../assets/Screenshot_25-2-2025_173821_weather-dashboard-xf5v.onrender.com.jpeg';
import employeeTrackerImage from '../assets/8656625561f147d982665ca7ea3c9d45.jpg';


const projects = [
    {
        title: 'Chalk-n-Charts',
        image: websnapprImage,
        deployedLink: 'https://steve-agostisi.github.io/Chalk-n-Charts/',
        githubLink: 'https://github.com/Steve-Agostisi/Chalk-n-Charts'
    },
    {
        title: 'Vehicle-Builder',
        image: jtBlueImage,
        deployedLink: 'https://example.com/project2',
        githubLink: 'https://github.com/Steve-Agostisi/Vehicle-Builder-'
    },
    {
        title: 'Weather-Dashboard',
        image: weatherDashboardImage,
        deployedLink: 'https://weather-dashboard-xf5v.onrender.com/',
        githubLink: 'https://github.com/Steve-Agostisi/weather-dashboard'
    },
    {
        title: 'Employee Tracker',
        image: employeeTrackerImage,
        deployedLink: 'https://example.com/project4',
        githubLink: 'https://github.com/Steve-Agostisi/Employee-Tracker-'
    },
    
];

const Portfolio = () => {
    return (
        <section>
            <h2>Portfolio</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        deployedLink={project.deployedLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;