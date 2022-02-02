import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Details from '../../components/Details/Details';
import { fetchPinballMachinesById } from '../../services/pinball';

const Detail = () => {
  const [machine, setMachine] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPinballMachinesById(id);
      setMachine(data);
      console.log('data', data);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      {loading && <h1>loading</h1>}
      {!loading && <Details {...machine} />}
    </div>
  );
};

export default Detail;
