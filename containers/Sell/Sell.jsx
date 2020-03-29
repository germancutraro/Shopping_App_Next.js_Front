import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_ITEM } from './sellMutations';
import uploadImage from '../../utils/uploadImage';

const Sell = () => {
  const { register, handleSubmit } = useForm();

  const [createItem, { loading }] = useMutation(CREATE_ITEM);

  const router = useRouter();

  const onSubmit = async args => {
    const file = await uploadImage(args.image[0]);

    const { data } = await createItem({
      variables: {
        ...args,
        image: file.secure_url,
        largeImage: file.eager[0].secure_url
      }
    });

    if (data)
      router.push({
        pathname: '/item',
        query: { id: data.createItem.id }
      });
  };

  return (
    <fieldset disabled={loading}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register} type='text' name='title' placeholder='Title...' />
        <input
          ref={register}
          type='text'
          name='description'
          placeholder='Description...'
        />
        <input ref={register} type='number' name='price' placeholder='Price' />
        <input ref={register} name='image' type='file' />
        <input type='submit' value='Publish' />
      </form>
    </fieldset>
  );
};

export default Sell;
