import React from 'react';
import './SortBy.css';

export default function SortBy({ sortByName, sortByDate, shuffle }) {
    return (
        <div className="sort-by">
            <button onClick={() => sortByName()}>Sort By Name</button>
            <button onClick={() => sortByDate()}>Sort By Date</button>
            <button onClick={() => shuffle()}>Shuffle</button>
        </div>
    );
}
