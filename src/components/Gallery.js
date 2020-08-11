
import React from 'react'
import ImageGallery from 'react-image-gallery';
 

 
export default function MyGallery(props) {
 
    return (
    <ImageGallery items={props.images} showThumbnails={false}/>
    );
}