import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Details = ({ images, date, title, type, design, manufacturer }) => {
  const history = useHistory();

  function handleBackHome() {
    history.push('/');
  }
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{type}</p>
      <p>{design}</p>
      <p>{manufacturer}</p>
      <div className="image-container">
        {images.map((i) => (
          <img className="img" key={i.href} src={i.href} />
        ))}
      </div>
      <button onClick={handleBackHome}>Go back to home</button>
    </>
  );
};

export default Details;
