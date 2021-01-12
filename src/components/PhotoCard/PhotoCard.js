import React from 'react';
import './PhotoCard.css';

import Photo from "../Photo/Photo";
import PhotoOptions from "../PhotoOptions/PhotoOptions";

export default function PhotoCard({ photo, index, deletePhoto, averageGraduation, likesUp, likesDown }) {
    return (
        <li className='photo-card'>
            <Photo photo={photo} />
            <PhotoOptions
                photo={photo}
                index={index}
                deletePhoto={deletePhoto}
                averageGraduation={averageGraduation}
                likesUp={likesUp}
                likesDown={likesDown} />
        </li>
    );
}
