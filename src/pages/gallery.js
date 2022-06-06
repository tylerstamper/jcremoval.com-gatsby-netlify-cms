import * as React from 'react';
import '../pages/css/gallery.css';
import Nav from '../components/nav';
import Footer from '../components/footer';
import imageData from '../pages/content/image_data.json';
import Helmet from 'react-helmet';


function Gallery(){

    const [images, setImages] = React.useState();

    React.useEffect(() => {
        let tempImageArr = [];

        imageData.forEach(arrItem => {
            tempImageArr.push(JSON.parse(arrItem));
        })
        setImages(tempImageArr);
    },[])

    return(
        <div className='Gallery'>
            <Helmet htmlAttributes={{lang: 'en',}}>
                <title>JC Removal | Gallery</title>
                <link rel="canonical" href="https://www.jcremoval.com/gallery"/>
                <meta name="description" content="JC Removal Gallery"/>
            </Helmet>
        <Nav />
            <main className='main-cont'>
                <h2>Gallery</h2>
                <div className='grid'>
                    {images && images.map(image => {
                        return <img src={image.image} alt={image.title}/>
                    })}
                </div>
            </main>
        <Footer />
        </div>
    );
}

export default Gallery;