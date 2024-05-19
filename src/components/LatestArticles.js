import React, { useEffect, useState } from 'react';
import './LatestArticles.css';

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/articles.json`)
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="latest-articles-container">
      <h2>All the latest</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <div className="article-header">
              <span className="article-date">{article.date}</span>
              <span className="article-category">{article.category}</span>
            </div>
            <a href={article.url} className="article-link">
              <h3>{article.title}</h3>
              {article.image && <img src={article.image} alt={article.title} className="article-image" />}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
