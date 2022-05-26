import * as React from 'react';

import '../pages/css/footer.css';
import phone from '../../static/assetts/phone-call.png';
import email from '../../static/assetts/email.png';
import fb from '../../static/assetts/fb.png';
import insta from '../../static/assetts/insta.png';
import homeAdvisor from '../../static/assetts/advisor.png';

function Footer(){

    return(
        <>
            <footer className='Footer'>

                <div className='section'>
                    <a className='home-advisor' href="http://www.homeadvisor.com/rated.JCRemoval.124678715.html"><img alt="Screened Contractor on HomeAdvisor" src={homeAdvisor} /></a>
                </div>

                <div className='section'>
                    <a className='contact-button' href='tel:16615055297'><img className='inline-img' src={phone} alt='phone'/>(661)-505-5297</a>
                    <a className='contact-button' href='mailto:jcremoval.contact@gmail.com'><img className='inline-img' src={email} alt='email'/>jcremoval.contact@gmail.com</a>
                    <p className='business-num'>Business license #00171067</p>
                </div>

                <div className='section socials'>
                    <a className='social-icon' href='https://www.facebook.com/JCRemoval1'><img src={fb} alt='Facebook logo'/></a>
                    <a className='social-icon' href='https://www.instagram.com/jc_removal/'><img src={insta} alt='Instagram Logo'/></a>
                </div>

            </footer>
            <div className='footer-pos-fix'>

            </div>
        </>
    );
}

export default  Footer;