import React from 'react';
import image from './images/slider-bg.jpg';
import './App.css'; // Ensure your CSS file is linked

function HeaderSection() {
    return (
        <div className="image" style={{ backgroundImage: `url(${image})` }}>
            <div className="navbar-data">
                <a href="#home" className="data">HIREVAC</a>
                <a href="#home" className="main">HOME</a>
                <a href="#about" className="main">ABOUT</a>
                <a href="#jobs" className="main">JOBS</a>
                <a href="#freelancers" className="main">FREELANCERS</a>
                <a href="#login" className="main">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    LOGIN
                </a>
                <a href="#signin" className="main">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    SIGN IN
                </a>
                <a href="#search" className="main">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </a>
            </div>

            <div className="content">
                <h1>Build Your POWERFUL CAREER</h1>
                <p>When looking at its layout, the point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                
                <input type="text" className='input-field' placeholder="Enter Keywords" />
                
                <select name="location" className='input-field'>
                    <option value="all">All Locations</option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                </select>
                
                <select name="role" className='input-field'>
                    <option value="ceo">CEO Experts</option>
                    <option value="web-designer">Web Designer</option>
                    <option value="web-developer">Web Developer</option>
                    <option value="graphic-designer">Graphic Designer</option>
                </select>

                <button className="submit-btn">SUBMIT NOW</button>

                <div className="checkbox-group">
                    <label><input type="checkbox" /> FREELANCER</label>
                    <label><input type="checkbox" /> PART TIME</label>
                    <label><input type="checkbox" /> FULL TIME</label>
                </div>
            </div>
        </div>
    );
}

export default HeaderSection;
