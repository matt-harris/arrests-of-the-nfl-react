import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import TopCrimes from './../../components/Widgets/TopCrimes';
import TopCrimesTeam from './../../components/Widgets/TopCrimesTeam';
import TopCrimesPosition from '../../components/Widgets/TopCrimesPosition';
import AFC from './../../components/Conferences/AFC/AFC';
import NFC from './../../components/Conferences/NFC/NFC';
import './Main.scss';

const Main = () => {
  const [nflTeams, setNflTeams] = useState([]);
  const [afcTeams, setAfcTeams] = useState([]);
  const [nfcTeams, setNfcTeams] = useState([]);

  async function fetchData() {
    const res = await fetch(`https://nflarrest.com/api/v1/team`);
    const data = await res.json();

    setNflTeams(data);
  }

  function conferenceTeams(teams) {
    setAfcTeams(teams.filter(team => team.Team_Conference === 'AFC'));
    setNfcTeams(teams.filter(team => team.Team_Conference === 'NFC'));
  }

  useEffect(() => { fetchData() }, []);
  useEffect(() => { conferenceTeams(nflTeams) }, [nflTeams]);
  
  return (
    <main className="main">
      <Row>
        <Col xs={12} md={4}>
          <TopCrimesTeam title="Top Teams" />
        </Col>
        <Col xs={12} md={4}>
          <TopCrimes title="Top Crimes" />
        </Col>
        <Col xs={12} md={4}>
          <TopCrimesPosition title="Top Positions" />
        </Col>
      </Row>

      <AFC teams={afcTeams} />
      <NFC teams={nfcTeams} />
    </main>
  )
};

export default Main;
