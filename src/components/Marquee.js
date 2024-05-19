import React, { useEffect, useState } from 'react';
import './Marquee.css';

const Marquee = () => {
  const [latestArticle, setLatestArticle] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/articles.json`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setLatestArticle(data[0]); // Assuming the latest article is the first one
        }
      });
  }, []);

  return (
    <div className="marquee-container">
      {latestArticle && (
        <div className="marquee">
          <a href={latestArticle.url} className="marquee-text">
            {latestArticle.title}: {latestArticle.summary}
          </a>
        </div>
      )}
    </div>
  );
};

export default Marquee;
