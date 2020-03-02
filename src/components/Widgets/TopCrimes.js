import React, { useState, useEffect } from 'react';
import ListWithCount from './../ListWithCount/ListWithCount';
import './TopCrimes.scss'

const TopCrimes = ({title}) => {
  const [topCrimeData, setTopCrimeData] = useState([]);

  async function fetchData() {
    const res = await fetch(`https://nflarrest.com/api/v1/crime?limit=10`);
    const data = await res.json();    
    
    const list = data.map(item => ({
      text: item.Category,
      count: item.arrest_count,
    }));

    setTopCrimeData(list);
  }

  useEffect(() => { fetchData() }, []);

  return (
    <div className="Card TopCrimes">
      { title && <h2>{title}</h2> }

      <ListWithCount list={topCrimeData} />
    </div>
  );
};

export default TopCrimes;
