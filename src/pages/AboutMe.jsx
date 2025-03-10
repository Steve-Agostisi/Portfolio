import React from 'react';
import avatar from 'C:/Users/sagos/OneDrive/Desktop/Portfolio/react-portfolio/src/assets/299995596_153046614003636_1105125707664596328_n.jpg'; // Adjust the path as necessary

const AboutMe = () => {
    return (
        <section id="about-me">
            <h2>About Me</h2>
            <img src={avatar} alt="Developer's Avatar" />
            <p>
            Motivated and technically skilled Broadcast Engineer with over four years of experience in live master control
            operations, technical troubleshooting, and quality control for television broadcasting. Currently expanding expertise
            in software development and artificial intelligence through the UConn Coding Boot Camp, focusing on object-
            oriented programming, web development, and modern coding tools. Seeking opportunities to contribute to a
            dynamic team in a tech-forward environment.
            </p>
        </section>
    );
};

export default AboutMe;