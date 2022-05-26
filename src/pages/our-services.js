import * as React from 'react';

import '../pages/css/ourServices.css';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { StaticImage } from 'gatsby-plugin-image';

import Helmet from 'react-helmet';

function OurServices(){

    return(
        <div className='Services'>
            <Helmet>
                <title>JC Removal - Services</title>
                <link rel="canonical" href="https://www.jcremoval.com/our-services"/>
                <meta name="description" content="JC Removal Services"/>
            </Helmet>
            <Nav />
            <main className='main-cont'>
                <h2>Our Services</h2>

                <div className='services-cont'>

                    <div className='service'>
                        <StaticImage className='gats-img' src='../../static/assetts/shed-removal.jpg' alt='Shed Garbage'/>
                        <div className='info-cont'>
                            <p>Minor Demolition</p>
                            <ul>
                                <li>Sheds</li>
                                <li>Hot Tubs</li>
                                <li>Jungle Gyms</li>
                                <li>Fencing</li>
                            </ul>
                            <a href='tel:16615055297' className='quoteBtn'>Get a Quote</a>
                        </div>
                    </div>

                    <div className='service'>
                        <StaticImage className='gats-img' src='../../static/assetts/appliance.webp' alt='Appliances'/>
                        <div className='info-cont'>
                            <p>Furniture & Appliances</p>
                            <ul>
                                <li>Beds</li>
                                <li>Couches</li>
                                <li>Refrigerators</li>
                                <li>Stoves</li>
                                <li>& more</li>
                            </ul>
                            <a href='tel:16615055297' className='quoteBtn'>Get a Quote</a>
                        </div>
                    </div>

                    <div className='service'>
                        <StaticImage className='gats-img' src='../../static/assetts/yardwaste.jpg' alt='Yard Waste'/>
                        <div className='info-cont'>
                            <p>Yard Waste</p>
                            <ul>
                                <li>Bagged Waste</li>
                                <li>Leaves</li>
                                <li>Tree Trimmings</li>
                                <li>& more</li>
                            </ul>
                            <a href='tel:16615055297' className='quoteBtn'>Get a Quote</a>
                        </div>
                    </div>

                    <div className='service'>
                        <StaticImage className='gats-img' src='../../static/assetts/industrial.jpg' alt='Construction Debris'/>
                        <div className='info-cont'>
                            <p>Construction Debris</p>
                            <ul>
                                <li>Roofing</li>
                                <li>Wood</li>
                                <li>Concrete</li>
                                <li>& more</li>
                            </ul>
                            <a href='tel:16615055297' className='quoteBtn'>Get a Quote</a>
                        </div>
                    </div>

                    <div className='service'>
                        <StaticImage className='gats-img' src='../../static/assetts/estate.jpg' alt='House Garbage'/>
                        <div className='info-cont'>
                            <p>Estate Cleanouts</p>
                            <ul>
                                <li>Garages</li>
                                <li>Houses</li>
                                <li>Backyards</li>
                                <li>Basements</li>
                            </ul>
                            <a href='tel:16615055297' className='quoteBtn'>Get a Quote</a>
                        </div>
                    </div>

                    <div className='service'>
                        <StaticImage className='gats-img' src='../../static/assetts/office-junk.jpg' alt='Office Garbage'/>
                        <div className='info-cont'>
                            <p>Office Cleanouts</p>
                            <ul>
                                <li>Individual Offices</li>
                                <li>Whole Offices</li>
                                <li>Bathrooms</li>
                                <li>Storages</li>
                            </ul>
                            <a href='tel:16615055297' className='quoteBtn'>Get a Quote</a>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
export default OurServices;