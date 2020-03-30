import React from 'react';
import Item from '../../components/Item/Item';
// graphql
import { useQuery } from '@apollo/react-hooks';
import { GET_ITEMS } from './itemsQueries';

const Items = () => {
  const { loading, error, data } = useQuery(GET_ITEMS, {
    fetchPolicy: 'network-only'
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {data.items.map(el => (
        <Item key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Items;
