import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from './authMutations';
import { ME } from './authQueries';

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const [signIn, { loading, error }] = useMutation(SIGN_IN);

  const router = useRouter();

  const onSubmit = async args => {
    const user = await signIn({
      variables: args,
      refetchQueries: [{ query: ME }]
    });
    if (user) router.push('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={loading}>
          <input ref={register} type='text' placeholder='email' name='email' />
          <input
            ref={register}
            type='password'
            placeholder='password'
            name='password'
          />
          <input type='submit' value='Sign In' />
          {error && <p>{error?.message}</p>}
        </fieldset>
      </form>
    </div>
  );
};

export default SignIn;
