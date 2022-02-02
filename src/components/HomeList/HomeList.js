import React from 'react';
import { Link } from 'react-router-dom';

const HomeList = ({ machines }) => {
  return (
    <div>
      {machines.map((m) => (
        <Link key={m.ipdb} to={`/detail/${m.ipdb}`}>
          <h1 role="heading">{m.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default HomeList;
