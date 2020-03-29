const Item = ({ title, price, image }) => {
  return (
    <div>
      {image && <img src={image} alt='' />}
      <h3>{title}</h3>
      <span>${price}</span>
    </div>
  );
};

export default Item;
