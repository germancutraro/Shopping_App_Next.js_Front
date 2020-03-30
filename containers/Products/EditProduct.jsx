import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { UPDATE_ITEM } from './productsMutations';
import { GET_ITEM } from './productsQueries';

const EditProduct = ({ productId }) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: { id: productId }
  });
  const [updateItem, { loading: editLoading }] = useMutation(UPDATE_ITEM);

  const onSubmit = async args => {
    const { data } = await updateItem({
      variables: {
        ...args,
        id: productId
      }
    });

    if (data)
      router.push({
        pathname: '/product',
        query: { id: data.updateItem.id }
      });
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <fieldset disabled={editLoading}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register}
          type='text'
          name='title'
          placeholder='Title...'
          defaultValue={data.item.title}
        />
        <input
          ref={register}
          type='text'
          name='description'
          placeholder='Description...'
          defaultValue={data.item.description}
        />
        <input
          ref={register}
          type='number'
          name='price'
          placeholder='Price'
          defaultValue={data.item.price}
        />
        <input type='submit' value='Update' />
      </form>
    </fieldset>
  );
};

export default EditProduct;
