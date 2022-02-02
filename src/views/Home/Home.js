import React, { useEffect, useState } from 'react';
import HomeList from '../../components/HomeList/HomeList';
import fetchPinballMachines from '../../services/pinball';

const Home = () => {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPinballMachines();
      setMachines(data);
    };
    fetchData();
  }, []);

  return <HomeList {...{ machines }} />;
};

export default Home;
