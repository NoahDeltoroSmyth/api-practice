import React, { useEffect, useState } from 'react';
import HomeList from '../../components/HomeList/HomeList';
import fetchPinballMachines from '../../services/pinball';

const Home = () => {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPinballMachines();
      setMachines(data);
      console.log('data', data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <h1>loading</h1>}
      {!loading && <HomeList {...{ machines }} />}
    </div>
  );
};

export default Home;
