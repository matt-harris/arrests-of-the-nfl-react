import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ArrestDetail from '../ArrestDetail/ArrestDetail';
import './TeamDetail.scss';

const TeamDetail = (props) => {
  const [arrestData, setArrestData] = useState([]);
  const [teamMeta, setTeamMeta] = useState({...props.location.state});
  const { team } = useParams();

  async function fetchData(team) {
    const res = await fetch(`https://nflarrest.com/api/v1/team/arrests/${team}`);
    res
      .json()
      .then(res => setArrestData(res));
  }

  useEffect(() => { fetchData(team) });

  useEffect(() => {
    setTeamMeta({...props.location.state});
  }, [props.location.state])

  return (
    <Grid fluid className="TeamDetail">
      <Row>
        <Col xs>
          <div className="TeamDetail__header">
            <img 
            className="TeamDetail__badge" 
            src={require(`./../../assets/img/${teamMeta.Team_name}.svg`)} 
            alt={teamMeta.Team_preffered_name} /
            >
            
            <div className="TeamDetail__info">
              <h1>{teamMeta.Team_preffered_name}</h1>

              <h2>{teamMeta.Team_Conference_Division}</h2>

              <h3>{teamMeta.arrest_count} Arrests</h3>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs>
          {
            arrestData.map((arrest, index) => <ArrestDetail key={index} arrest={arrest} />)
          }
        </Col>
      </Row>
    </Grid>
  )
};

export default TeamDetail;
