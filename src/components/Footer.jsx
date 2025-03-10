import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>Connect with me:</p>
                <ul>
                    <li>
                        <a href="https://github.com/Steve-Agostisi" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/Steven Agostisi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/your-stackoverflow-id" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
                    </li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Steven Agostisi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;