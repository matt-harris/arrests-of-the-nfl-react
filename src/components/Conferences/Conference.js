import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Team from './../Team/Team';
import { Link } from 'react-router-dom';

const Conference = ({title, teams}) => (
  <div className="Conference">
    { title && <h2>{title}</h2> }

    <Row>
      { 
        teams.map(team => (
          <Col xs key={team.Team}>
            <Link to={{
              pathname: `/teams/${team.Team}`,
              state: {
                ...team
              }
            }}>

              <Team team={team} showBadge showName={false} />
            </Link>
          </Col>
        ))
      }
    </Row>
  </div>
);

export default Conference;
