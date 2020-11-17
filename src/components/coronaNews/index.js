/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import app from '../../services/firebase';
import 'firebase/database';

const CoronaNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

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

  // Get Current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const IndexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(IndexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Posts news={currentPosts} loading={isLoading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={news.length}
        paginate={paginate}
      />
    </div>
  );
};

export default CoronaNews;
