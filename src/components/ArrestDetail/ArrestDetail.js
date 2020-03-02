import React from 'react';
import './ArrestDetail.scss';

const ArrestDetail = ({arrest}) => (
  <div className="ArrestDetail Card">
    <div className="ArrestDetail__date">{arrest.Date}</div>
    <div className="ArrestDetail__player-info">
      <div className="ArrestDetail__name">
        {arrest.Name}
      </div>
      <div className="ArrestDetail__position">
        {arrest.Position_name}
      </div>
    </div>
    <div className="ArrestDetail__category">{arrest.Category}</div>
    <div className="ArrestDetail__description">{arrest.Description}</div>
    <div className="ArrestDetail__outcome">{arrest.Outcome}</div>
  </div>
);

export default ArrestDetail;
