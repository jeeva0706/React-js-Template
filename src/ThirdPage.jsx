
import React from 'react';
import aboutImage from './images/about-img.jpg';

function AboutUs() {
    return (
        <div className="about-us-section">
            <div className="about-us-content">
                <h2>ABOUT US</h2>
                <p>
                    Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors have a more-or-less normal distribution of letters.
                    As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors.
                </p>
                <button className="read-more-btn">Read More</button>
            </div>
            <div className="about-us-image">
                <img src={aboutImage} alt="About us" />
            </div>
        </div>
    );
}

export default AboutUs;
