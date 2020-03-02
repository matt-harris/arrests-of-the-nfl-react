import React, { useState, useEffect } from 'react';
import ListWithCount from '../ListWithCount/ListWithCount';

const TopCrimesPosition = ({title}) => {
  const [topPositionData, setTopPositionData] = useState([]);

  async function fetchData() {
    const res = await fetch(`https://nflarrest.com/api/v1/position?limit=10`);
    const data = await res.json();

    const list = data.map(item => ({
      text: item.Position,
      count: item.arrest_count,
    }));

    setTopPositionData(list);
  }

  useEffect(() => { fetchData() }, []);

  return (
    <div className="Card TopCrimes">
      { title && <h2>{title}</h2> }

      <ListWithCount list={topPositionData} />
    </div>
  );
};

export default TopCrimesPosition;
