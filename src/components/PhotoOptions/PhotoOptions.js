import React, { useState, useEffect, useCallback } from 'react';
import './PhotoOptions.css';

export default function PhotoOptions({photo, index, deletePhoto, averageGraduation, likesUp, likesDown }) {
    const [grades, setGrades] = useState([]);

    const averageGraduationHandler = useCallback(() => {
        if (grades.length > 0 && index > -1)
            averageGraduation(grades, index)
    }, [averageGraduation, grades, index]);

    useEffect(() => {
        averageGraduationHandler();
    }, [averageGraduationHandler])

    return (
        <div className="options">
            <div className="grade">
                <header>
                    <h1>Grade this photo</h1>
                </header>
                <article className='grades-buttons'>
                    <button onClick={() => setGrades(prev => [...prev, 1])}/>
                    <button onClick={() => setGrades(prev => [...prev, 2])}/>
                    <button onClick={() => setGrades(prev => [...prev, 3])}/>
                    <button onClick={() => setGrades(prev => [...prev, 4])}/>
                    <button onClick={() => setGrades(prev => [...prev, 5])}/>
                </article>
                <article>
                    <p>Grades: {photo.gradeAverage}</p>
                </article>
                <article className='hands'>
                    <button className='like' onClick={() => likesUp(index)}/>
                    <button className='dislike' onClick={() => likesDown(index)}/>
                </article>
                <article>
                    <p>{photo.likes} people likes that photo!</p>
                </article>
            </div>
            <button
                className='delete-button'
                onClick={() => deletePhoto(index)}>
                Delete from Gallery
            </button>
        </div>
    )
}
