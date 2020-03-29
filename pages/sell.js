import Link from 'next/link';
import AddItem from '../containers/Sell/AddItem';

const Sell = () => {
  return (
    <div>
      <h1>Sells</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <AddItem />
    </div>
  );
};

export default Sell;
