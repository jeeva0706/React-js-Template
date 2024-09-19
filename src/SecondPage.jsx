import firstImage from './images/c1.png';
import secondImage from './images/c2.png';
import thirdImage from './images/c3.png';
import fourthImage from './images/c4.png';
import fifthImage from './images/c5.png';
import sixthImage from './images/c6.png';
import './App.css';

function SecondContent() {
    const services = [
        { image: firstImage, title: "Web Design" },
        { image: secondImage, title: "Web Development" },
        { image: thirdImage, title: "Graphic Design" },
        { image: fourthImage, title: "SEO Marketing" },
        { image: fifthImage, title: "Accounting" },
        { image: sixthImage, title: "Content Writing" }
    ];

    return (
        <div className="secondpage">
            {services.map((service, index) => (
                <div className="service-item" key={index}>
                    <img src={service.image} alt={service.title} className="service-icon" />
                    <h4>{service.title}</h4>
                </div>
            ))}
        </div>
    );
}

export default SecondContent;