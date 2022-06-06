import * as React from 'react';

import Nav from '../components/nav';
import Footer from '../components/footer';
import FormModule from '../components/form';
import Helmet from 'react-helmet';
import '../pages/css/contact.css';

import fb from '../../static/assetts/fb.png';
import insta from '../../static/assetts/insta.png';

function Contact(){

    return(
        <div className='Contact'>
            <Helmet htmlAttributes={{lang: 'en',}}>
                <title>JC Removal | Contact</title>
                <link rel="canonical" href="https://www.jcremoval.com/contact"/>
                <meta name="description" content="JC Removal Contact Form"/>
            </Helmet>
        <Nav />
            <main className='main-content'>

                <div className='details'>
                <h2>Contact Us</h2>
                <p>Email: jcremoval.contact@gmail.com</p>
                <p>Phone: (661) 505-5297</p>
                <a href='https://www.facebook.com'><img src={fb} alt='Facebook'/></a>
                <a href='https://www.instagram.com'><img src={insta} alt='Instagram'/></a>
                </div>

                <div className='form'>
                    <FormModule />
                </div>

            </main>
        <Footer />
        </div>
    );
}
export default Contact;