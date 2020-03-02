import React, { useState, useEffect } from 'react';
import ListWithCount from './../ListWithCount/ListWithCount';

const TopCrimesTeam = ({title}) => {
  const [topTeamData, setTopTeamData] = useState([]);

  async function fetchData() {
    const res = await fetch(`https://nflarrest.com/api/v1/team?limit=10`);
    const data = await res.json();

    const list = data.map(item => ({
      team: item.Team,
      text: item.Team_preffered_name,
      count: item.arrest_count,
    }));

    setTopTeamData(list);
  }

  useEffect(() => { fetchData()}, []);

  return (
    <div className="Card TopCrimes">
      { title && <h2>{title}</h2> }

      <ListWithCount list={topTeamData} />
    </div>
  );
};

export default TopCrimesTeam;
