import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/sells'>
        <a>Sells</a>
      </Link>
    </div>
  );
};

export default Index;
