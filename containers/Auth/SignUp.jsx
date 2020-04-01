import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP } from './authMutations';

const SignUp = () => {
  const { register, values, handleSubmit } = useForm();
  const [signUp] = useMutation(SIGN_UP);

  const onSubmit = async args => {
    const user = await signUp({ variables: args });
    if (user) alert('created!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <input ref={register} type='text' placeholder='name' name='name' />
          <input ref={register} type='text' placeholder='email' name='email' />
          <input
            ref={register}
            type='password'
            placeholder='password'
            name='password'
          />
          <input type='submit' value='Sign Up' />
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
