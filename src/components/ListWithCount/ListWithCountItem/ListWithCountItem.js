import React from 'react';
import './ListWithCountItem.scss';

const ListWithCountItem = ({text, count}) => (
  <li className="ListWithCountItem">
    <div className="ListWithCountItem__text">
      {text}
    </div>

    <div className="ListWithCountItem__count">
      <div className="ListWithCountItem__num">
        {count}
      </div>
      <div className="ListWithCountItem__meta">
        Arrests
      </div>
    </div>
  </li>
);

export default ListWithCountItem;