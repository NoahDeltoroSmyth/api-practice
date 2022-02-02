const fetchPinballMachines = async () => {
  const resp = await fetch(`https://ponball.herokuapp.com/api/v1/machines`);
  const data = await resp.json();
  return data;
};

export default fetchPinballMachines;
