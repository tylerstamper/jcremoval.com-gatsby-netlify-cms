import * as React from 'react';

export default function ImageComp({image}){
    return(
        <>
             <img src={image.image} alt={image.title}/>
        </>
    );
}