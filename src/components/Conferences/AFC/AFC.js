import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Conference from './../Conference';
import './../Conferences.scss';

const AFC = ({title, teams}) => {

  function sortAlpha(a, b) {
    const teamA = a.Team_preffered_name.toLowerCase();
    const teamB = b.Team_preffered_name.toLowerCase();
  
    return (teamA > teamB) ? 1 : -1;
  }

  const east = teams.filter(team => team.Team_Conference_Division.includes('East')).sort(sortAlpha);
  const north = teams.filter(team => team.Team_Conference_Division.includes('North')).sort(sortAlpha);
  const south = teams.filter(team => team.Team_Conference_Division.includes('South')).sort(sortAlpha);
  const west = teams.filter(team => team.Team_Conference_Division.includes('West')).sort(sortAlpha);

  return (
    <Grid fluid className="Conferences">
      { title && <h2>{title}</h2> }

      <Row>
        <Col xs={12} md={6}>
          <Conference teams={east} />
        </Col>
        <Col xs={12} md={6}>
          <Conference teams={north} />
        </Col>
        <Col xs={12} md={6}>
          <Conference teams={south} />
        </Col>
        <Col xs={12} md={6}>
          <Conference teams={west} />
        </Col>
      </Row>
    </Grid>
  )
};

export default AFC;