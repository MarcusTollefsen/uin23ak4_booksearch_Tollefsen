// SearchBar.js
import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search for a book..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }} // Vurder å flytte dette til en CSS-klasse
    />
  );
};

export default SearchBar;
