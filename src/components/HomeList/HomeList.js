import React from 'react';
import { Link } from 'react-router-dom';

const HomeList = ({ machines }) => {
  return (
    <>
      {machines.map((m) => (
        <Link key={m.ipdb}>
          <h1>{m.title}</h1>
        </Link>
      ))}
    </>
  );
};

export default HomeList;
