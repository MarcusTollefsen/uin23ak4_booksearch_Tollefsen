import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    // Setter opp en timeout for å forsinke søket. for å forhindre at query blir sendt for hvert tastetryk
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 3000);

    // Rens opp forrige timeout hvis query endres før 3 sekunder er over
    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div className="container">
      <SearchBar query={query} setQuery={setQuery} />
      <SearchResults query={debouncedQuery} />
    </div>
  );
}

export default App;
