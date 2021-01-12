import React from 'react';
import './PhotosList.css';
import PhotoCard from "../PhotoCard/PhotoCard";

export default function PhotosList({photos, deletePhoto, averageGraduation, likesUp, likesDown}) {
    return (
        <main>
            <ul className='photo-list'>
                {photos.map(photo => (
                    <PhotoCard
                        key={photo.url}
                        photo={photo}
                        index={photos.indexOf(photo)}
                        deletePhoto={deletePhoto}
                        averageGraduation={averageGraduation}
                        likesUp={likesUp}
                        likesDown={likesDown} />
                ))}
            </ul>
        </main>
    );
}
