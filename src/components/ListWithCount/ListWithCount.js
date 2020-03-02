import React from 'react';
import ListWithCountItem from './ListWithCountItem/ListWithCountItem';
import './ListWithCount.scss'

const ListWithCount = ({list}) => (
  <ol className="ListWithCount">
    {
      list.map(item => (
        <ListWithCountItem key={item.text} text={item.text} count={item.count} />
      ))
    }
  </ol>
);

export default ListWithCount;