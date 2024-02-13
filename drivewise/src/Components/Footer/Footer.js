import React from "react";
import './Footer.css';

export default function Footer() {
    return(
        <footer className="Footer">
            <div className="Footer-content">
                <div className="Footer-section">
                <h2>Contact Us</h2>
                <p>Email: thewisedrivers00@gmail.com</p>
                <p>Phone: +1 (858) 333-1374</p>
                </div>
                <div className="Footer-section">
                <h2>Follow Us</h2>
                <p><a href="www.linkedin.com/in/jack-dechiro-492871286">Twitter</a></p>
                <p><a href="www.linkedin.com/in/jack-dechiro-492871286">Instagram</a></p>
                </div>
                <div className="Footer-section">
                <h2>Links</h2>
                <p><a href="/Founders">Founders</a></p>
                <p><a href="www.linkedin.com/in/jack-dechiro-492871286">About</a></p>
                </div>
            </div>
            <div className="Footer-bottom">
                <p>&copy;Drive Wise. All rights reserved.</p>
            </div>
        </footer>
    );
} 