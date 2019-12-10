import React, { useState, useEffect } from 'react';

function useGiphy(query) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
}
useEffect(() => {
    async function fetchData(query) {
        try {
            const response = await fetch(
    
            );
            const json = await response.json();
            setResults(
                json.data.map(item => {
                  return item.images.preview.mp4;
                })
              );
            } finally {
              setLoading(false);
            }
          }
      
          if (query !== '') {
            fetchData();
          }
        }, [query]);
    
        return [results, loading];
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
            <form onSubmit={e => {
                e.preventDefault();
                setQuery(search);
            }}>
                <input
                value={search}
                onChange={e=> setSearch(e.target.value)}
                placeholder= "Search for Gifs" 
                />
                <button type="submit">Search</button>
            </form>
            <br />
          {loading ? (
            <h1>GIVE ME GIFS</h1>
          ) : (
            results.map(item => <video autoPlay loop key={item} src={item} />)
          )}
            </div>
        );
}
