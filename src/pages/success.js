import * as React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import './css/success.css';

function Success(){

    return(
        <div className='Success'>
            <Helmet>
                <title>JC Removal | Success</title>
                <link rel="canonical" href="https://www.jcremoval.com/success"/>
            </Helmet>
            <main className='main-cont'>
                <h2>Thanks for the message!</h2>
                <p>
                    You may close this page or <Link to='/'>Return Home</Link>
                </p>
            </main>
        </div>
    );
}

export default Success;