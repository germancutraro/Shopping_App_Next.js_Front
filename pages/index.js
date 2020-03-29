import Link from 'next/link';
import Items from '../containers/Items/Items';

const Index = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/sells'>
        <a>Sells</a>
      </Link>

      <Items />
    </div>
  );
};

export default Index;
