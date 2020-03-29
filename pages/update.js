import { useRouter } from 'next/router';
import EditItem from '../containers/Sell/EditItem';

const Update = () => {
  const router = useRouter();
  return (
    <div>
      <EditItem itemId={router.query.id} />
    </div>
  );
};

export default Update;
