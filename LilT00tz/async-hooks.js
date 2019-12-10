import React, { useState, useEffect } from 'react';

async function fetchData(query) {
    try {
        const response = await fetch(

        );
        const json = await response.json();
    } catch (error) {
        
    }
}
export default function AsyncHooks() {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query !== '') {
            fetchData().then(setResults);
        }
    }, {query});
    
    return (
        <div>
        <h1>Async React Hooks</h1>
        <form onSubmit>
            <input
            value={search}
            onChange={e=> setSearch(e.target.value)}
            placeholder= "Search for Gifs" 
            />
        </form>
        </div>
    );
}