import React from 'react';
import './Team.scss';

const Team = ({team, showBadge, showName}) => (
  <div className="Team">
    {
      showBadge &&

      <img 
        className="Team__badge" 
        src={require(`./../../assets/img/${team.Team_name}.svg`)} 
        alt={team.Team_preffered_name} /
        >
    }

    { 
      showName && 
    
      <div className="Team__name">{team.Team_preffered_name}</div>
    }
  </div>
);

export default Team;
