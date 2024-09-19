
// import mypic1 from './images/e1.jpg';
// import mypic2 from './images/e2.jpg';
// import mypic3 from './images/e3.jpg';

// function FivthPage() {
//     return (
//         <div className="persons">
//             <h1>LOOKING FOR EXPERTS?</h1>
//             <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.</p>
//             <img src={mypic1} width={350} height={350} className='image-1' alt='pic1' />
//             <img src={mypic2} width={350} height={350} className='image-2' alt='pic2' />
//             <img src={mypic3} width={350} height={350} className='image-3' alt='pic3' />

//         </div>
//     )
// }

// export default FivthPage;

import mypic1 from './images/e1.jpg';
import mypic2 from './images/e2.jpg';
import mypic3 from './images/e3.jpg';

function FivthPage() {
    return (
        <div className="persons">
            <h1>LOOKING FOR EXPERTS?</h1>
            <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris<br /> iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.</p>
            
            <div className="expert-cards">
                <div className="card">
                    <img src={mypic1} alt="Expert 1" className="profile-pic" />
                    <h2>Martin Anderson</h2>
                    <p>Web Analyzer</p>
                    <p>41 Jobs Done</p>
                    <div className="rating">⭐⭐⭐⭐⭐</div>
                    <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.</p>
                </div>

                <div className="card">
                    <img src={mypic2} alt="Expert 2" className="profile-pic" />
                    <h2>Semanta Klores</h2>
                    <p>Graphic Designer</p>
                    <p>32 Jobs Done</p>
                    <div className="rating">⭐⭐⭐⭐⭐</div>
                    <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.</p>
                </div>

                <div className="card">
                    <img src={mypic3} alt="Expert 3" className="profile-pic" />
                    <h2>Ryan Martines</h2>
                    <p>SEO Expert</p>
                    <p>27 Jobs Done</p>
                    <div className="rating">⭐⭐⭐⭐⭐</div>
                    <p>Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris iaculis.</p>
                </div>
            </div>
            
            <button className="view-all">View All Freelancers</button>
        </div>
    );
}

export default FivthPage;
