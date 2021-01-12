import React from 'react';
import './Photo.css';

export default function Photo({ photo }) {
    return (
        <div className='photo-border' style={{backgroundImage: "url(" + photo.url + ")"}}>
            <div className='blur'>
                <header>
                    <h1>{photo.title}</h1>
                    <p>Added {photo.date}</p>
                </header>
                <main>
                    <div className='photo' style={{backgroundImage: "url(" + photo.url + ")"}}/>
                </main>
            </div>
        </div>
    );
}
