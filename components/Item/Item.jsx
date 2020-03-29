import React from 'react';

const Item = ({ title, price }) => {
  return (
    <div>
      <h3>{title}</h3>
      <span>${price}</span>
    </div>
  );
};

export default Item;
