import React from 'react';
import { useQuery } from 'react-query';

const fetchData = async () => {
  const res = await fetch('/api/data');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const HomePage = () => {
  const { data, error } = useQuery('fetchData', fetchData);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Enterprise AI Platform</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HomePage;