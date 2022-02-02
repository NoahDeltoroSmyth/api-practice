import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Details = ({ images, date, title, type, units, design, manufacturer }) => {
  const history = useHistory();

  function handleBackHome() {
    history.push('/');
  }
  return (
    <div>
      {images.map((i) => (
        <img key={i.href} src={i.href} />
      ))}
      <button onClick={handleBackHome}>Go back to home</button>
    </div>
  );
};

export default Details;
