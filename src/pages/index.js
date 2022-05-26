import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Nav from '../components/nav';
import Footer from '../components/footer';
import CarouselComp from '../components/carousel';
import Posts from '../components/posts';
import phone from '../../static/assetts/phone-call.png';
import Helmet from 'react-helmet';

function Home(){

    return(
        <div className='Home'>
            <Helmet>
                <title>JC Removal - Home</title>
                <link rel="canonical" href="https://www.jcremoval.com/"/>
                <meta name="description" content="JC Removal Home page"/>
            </Helmet>
        <Nav />
            <main className='main-cont'>
                <div className='hero-img'>
                    <StaticImage className='hero-img' src='../../static/assetts/IMG_1887.jpg' alt='JC Removal Owners'/>
                    <div className='hero-text'>
                        <p>JC Removal is an emerging junk removal business located in Kern County, ready to take aim at your trash</p>
                        <button><img src={phone} alt='call us button'/>CALL FOR A FREE QUOTE</button>
                    </div>
                </div>

                <div className='choose-us'>
                    <h2>Why Choose Us</h2>
                        <div className='grid'>
                            <div className='grid-item'>
                                <StaticImage 
                                    src='../../static/assetts/leveled-home.png'
                                    alt='our team'
                                />
                                <div className='text'>
                                    <p>
                                    Our professionals will show up to the jobsite on time and ready to work.
                                    </p>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <StaticImage 
                                    src='../../static/assetts/leveled-home.png'
                                    alt='our tools'
                                    />
                                <div className='text'>
                                    <p>
                                        We have the right tools for every job guaranteed.
                                    </p>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <StaticImage
                                    src='../../static/assetts/waste_facility.jpg'
                                    alt='placeholder'
                                    />
                                <div className='text'>
                                    <p>
                                        We guarantee your waste will make it to the proper waste facility.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link to='/our-services'>View Our Services</Link>
                </div>

                <div className='reviews'>
                    <h2>What Our Customers Have To Say</h2>
                    <CarouselComp />
                </div>

                <div className='updates'>
                    <h2>Updates</h2>
                    <Posts />
                </div>

            </main>
        <Footer />
        </div>
    );
}

export default Home;