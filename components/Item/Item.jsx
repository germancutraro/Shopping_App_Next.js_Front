import Link from 'next/link';

const Item = ({ id, title, price, image }) => {
  return (
    <div>
      {image && <img src={image} alt='' />}
      <h3>{title}</h3>
      <span>${price}</span>

      <Link href={`/update?id=${id}`}>
        <a>Edit</a>
      </Link>
      <a href='#'>Delete</a>
    </div>
  );
};

export default Item;
