import React, {useState, useEffect} from 'react';
import './App.css';

import photosData from './data/photos.json';
import PhotosList from "./components/PhotosList/PhotosList";
import SortBy from "./components/SortBy/SortBy";

export default function App() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        setPhotos(photosData);
    }, [photos]);

    const deletePhoto = (index) => {
        if (index > -1) {
            photos.splice(index, 1)
            setPhotos(numbers => numbers.filter(element => element !== index))
        }
    }

    const averageGraduation = (grades, index) => {
        if (index > -1 && grades.length !== 0) {
            photos[index].gradeAverage = Math.floor((grades.reduce((a, b) => a + b) / grades.length) * 100) / 100;
            setPhotos(numbers => numbers.filter(element => element === index));
        }
    }

    const likesUp = (index) => {
        // photos.map(photo => photo.likes = photo.likes + 1);

        if (index > -1) {
            photos[index].likes += 1;
             setPhotos(numbers => numbers.filter(element => element === index));
        }
    }

    const likesDown = (index) => {
        if (index > -1) {
            photos[index].likes -= 1;
            setPhotos(numbers => numbers.filter(element => element === index));
        }
    }

    const sortByName = () => {
        photos.sort((a, b) => a.title.localeCompare(b.title));
        setPhotos(photos => photos.filter(element => element));
    }

    const sortByDate = () => {
        photos.sort((a, b) => {
            const c = new Date(a.date);
            const d = new Date(b.date);
            return c - d;
        });

        setPhotos(photos => photos.filter(element => element))
    }

    const shuffle = () => {
        photos.sort(() => .5 - Math.random());
        setPhotos(photos => photos.filter(element => element))
    }

    return (
        <section className="App">
            <header className='app-header'>
                <h1>Jazzy Gallery</h1>
            </header>
            <SortBy
                sortByName={sortByName}
                sortByDate={sortByDate}
                shuffle={shuffle}/>
            <PhotosList
                photos={photos}
                deletePhoto={deletePhoto}
                averageGraduation={averageGraduation}
                likesUp={likesUp}
                likesDown={likesDown} />
        </section>
    );
}
