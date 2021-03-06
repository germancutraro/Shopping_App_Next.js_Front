import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP } from './authMutations';
import { ME } from './authQueries';

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [signUp, { loading, error }] = useMutation(SIGN_UP);

  const router = useRouter();

  const onSubmit = async args => {
    const user = await signUp({
      variables: args,
      refetchQueries: [{ query: ME }]
    });
    if (user) router.push('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={loading}>
          <input ref={register} type='text' placeholder='name' name='name' />
          <input ref={register} type='text' placeholder='email' name='email' />
          <input
            ref={register}
            type='password'
            placeholder='password'
            name='password'
          />
          <input type='submit' value='Sign Up' />
          {error && <p>{error?.message}</p>}
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
