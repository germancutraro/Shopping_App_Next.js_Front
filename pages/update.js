import { useRouter } from 'next/router';
import EditProduct from '../containers/Products/EditProduct';

const Update = () => {
  const router = useRouter();
  return (
    <div>
      <EditProduct productId={router.query.id} />
    </div>
  );
};

export default Update;
