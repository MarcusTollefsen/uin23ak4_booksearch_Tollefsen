import React from 'react';

const BookCard = ({ book }) => {
  const coverId = book.cover_i;
  const coverUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : 'fallback-cover-url-here.jpg';
  const amazonId = Array.isArray(book.id_amazon) ? book.id_amazon[0] : book.id_amazon;
  const amazonUrl = amazonId ? `https://www.amazon.com/s?k=${amazonId}` : '';

  // Funksjon for å åpne Amazon URL
  const handleAmazonSearch = () => {
    if (amazonUrl) {
      window.open(amazonUrl, '_blank');
    }
  };

  return (
    <div className="book-card">
      {coverId && <img src={coverUrl} alt={`Cover of ${book.title}`} />}
      <h2>{book.title}</h2>
      <p>First published in: {book.first_publish_year || 'Unknown'}</p>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      {book.ratings_average && <p>Average Rating: {book.ratings_average}</p>}
      {amazonId && (
        <button onClick={handleAmazonSearch} style={{padding: '10px', marginTop: '10px'}}>
          Search on Amazon
        </button>
      )}
    </div>
  );
};

export default BookCard;
