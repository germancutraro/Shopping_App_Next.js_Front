import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';

import { DELETE_ITEM } from '../../containers/Sell/sellMutations';
import { GET_ITEMS } from '../../containers/Products/productsQueries';

const ProductItem = ({ id, title, price, image }) => {
  const [deleteItem] = useMutation(DELETE_ITEM, {
    update(cache, payload) {
      const data = cache.readQuery({ query: GET_ITEMS });
      const newData = { ...data };
      const items = newData.items.filter(
        item => item.id !== payload.data.deleteItem.id
      );
      cache.writeQuery({ query: GET_ITEMS, data: { ...data, items } });
    }
  });

  const handleDelete = () => deleteItem({ variables: { id } });

  return (
    <Link href={`/product?id=${id}`}>
      <div>
        {image && <img src={image} alt='' />}
        <h3>{title}</h3>
        <span>${price}</span>

        <Link href={`/update?id=${id}`}>
          <a>Edit</a>
        </Link>
        <p onClick={handleDelete}>Delete</p>
      </div>
    </Link>
  );
};

export default ProductItem;
