import React, { useEffect, useState } from 'react';
import app from '../../services/firebase';
import 'firebase/database';

const CoronaNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
      setIsLoading(false);
    });
  }, []);

  // eslint-disable-next-line no-console
  console.log(news);

  return (
    <div>
      <h3>Top News Headline </h3>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <ol>
          {news.map((item, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <strong>
                  Tanggal Berita :
                  <br />
                  {item.date.slice(0, 10)}
                </strong>
                {item.activity.map((detail, urutan) => {
                  // eslint-disable-next-line no-use-before-define
                  return newFunction(urutan, detail);
                })}
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};

export default CoronaNews;
function newFunction(urutan, detail) {
  return (
    <>
      <h4>
        <a href={detail.url} target="blank">
          {detail.title}
        </a>
      </h4>
    </>
  );
}
