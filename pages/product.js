import { useRouter } from 'next/router';
import SingleProduct from '../containers/Items/Product';

const Product = () => {
  const router = useRouter();
  return <SingleProduct productId={router.query.id} />;
};

export default Product;
