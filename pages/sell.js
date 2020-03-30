import Link from 'next/link';
import AddProduct from '../containers/Products/AddProduct';

const Sell = () => {
  return (
    <div>
      <h1>Sells</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <AddProduct />
    </div>
  );
};

export default Sell;
