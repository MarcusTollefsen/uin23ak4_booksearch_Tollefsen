import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const SearchResults = ({ query }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      let url = 'https://openlibrary.org/search.json?';
      if (query.length > 2) {
        url += `q=${query}&limit=20`; // Antar at søkeforespørselen ikke inneholder tegn som må prosentkodes
      } else {
        url += 'q=James+Bond&limit=20'; // Standard søk, begrenset til de første 20 resultatene
      }
    
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data.docs);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    

    fetchBooks();
  }, [query]);

  return (
    <div className="search-results">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default SearchResults;
