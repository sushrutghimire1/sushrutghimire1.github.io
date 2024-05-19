import React, { useEffect, useState } from 'react';
import './BookCards.css';

const BookCard = ({ title, date, text, imageUrl, url }) => (
  <div className="card">
    <div className="card-row">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-date">{date}</p>
        <p className="card-text">{text}</p>
        <a href={url} className="card-link">Continue reading...</a>
      </div>
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  </div>
);

const BookCards = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/books.json`)
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="container">
      <h2>Book Reviews</h2>
      {books.map((book, index) => (
        <BookCard 
          key={index}
          title={book.title}
          date={book.date}
          text={book.text}
          imageUrl={book.imageUrl}
          url={book.url}
        />
      ))}
    </div>
  );
};

export default BookCards;
