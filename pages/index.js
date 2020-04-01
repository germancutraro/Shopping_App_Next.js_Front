import Link from 'next/link';
import Products from '../containers/Products/Products';

const Index = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/sell'>
        <a>Sells</a>
      </Link>
      <Link href='/signup'>
        <a>Sign Up</a>
      </Link>
      <Link href='/signin'>
        <a>Sign In</a>
      </Link>
      <Products />
    </div>
  );
};

export default Index;
