/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

const Posts = ({ news, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ol className="list-group mb-4">
      {news.map((item, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <strong>
                    {item.date.slice(8, 10)}-{item.date.slice(5, 7)}-
                    {item.date.slice(0, 4)}
                  </strong>
                </Card.Title>
                <Card.Text>
                  {item.activity.map((detail, urutan) => {
                    // eslint-disable-next-line no-use-before-define
                    return newFunction(urutan, detail);
                  })}
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
        );
      })}
    </ol>
  );
};

export default Posts;

function newFunction(urutan, detail) {
  return (
    <>
      <h6>{detail.title}</h6>
      <Button variant="primary" href={detail.url} target="blank">
        Baca Selengkapnya
      </Button>
    </>
  );
}
