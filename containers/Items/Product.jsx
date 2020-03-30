import { useQuery } from '@apollo/react-hooks';
import { GET_ITEM } from '../Sell/sellQueries';

const Product = ({ productId }) => {
  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: { id: productId }
  });

  if (loading) return <h1>Loading...</h1>;
  console.log('Proiduct', data);
  return (
    <div>
      <h1>{data.item.title}</h1>

      <p>{data.item.description}</p>
      <p>{data.item.price}</p>

      <img src={data.item.largeImage} alt='' />
    </div>
  );
};

export default Product;
