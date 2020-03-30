import Item from '../../components/ProductItem/ProductItem';
// graphql
import { useQuery } from '@apollo/react-hooks';
import { GET_ITEMS } from './productsQueries';

const Products = () => {
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

export default Products;
