import Link from 'next/link';
import SellContainer from '../containers/Sell/Sell';

const Sell = () => {
  return (
    <div>
      <h1>Sells</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <SellContainer />
    </div>
  );
};

export default Sell;
