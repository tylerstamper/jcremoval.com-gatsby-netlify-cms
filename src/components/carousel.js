import * as React from 'react';
import '../pages/css/carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import reviewData from '../pages/content/review_data.json';

import star from '../images/star.png';

function CarouselComp(){

    const [reviews, setReviews] = useState();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let tempReviewArr = [];

        if(reviewData.length > 0){
            reviewData.forEach(arrItem => {
                tempReviewArr.push(JSON.parse(arrItem));
            })
            setReviews(tempReviewArr);
        }
    },[])


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {reviews && reviews.map((review, index) => {
                return(
                    <Carousel.Item interval={5000} key={index}>
                        <div className='carousel-item-container'>
                            <div className='scrollable'>
                                <p className='review-text'>{review.review}</p>
                            </div>
                            <p className='review-author'>{review.name}</p>
                            <span className='rating'>
                                <img src={star} alt='1 star'/>
                                <img src={star} alt='2 star'/>
                                <img src={star} alt='3 star'/>
                                <img src={star} alt='4 star'/>
                                <img src={star} alt='5 star'/>
                            </span>
                        </div>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

export default CarouselComp;