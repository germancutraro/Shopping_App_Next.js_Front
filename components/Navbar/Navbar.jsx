import { memo } from 'react';
import Link from 'next/link';
import User from '../../containers/Auth/User';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ME } from '../../containers/Auth/authQueries';
import { SIGN_OUT } from '../../containers/Auth/authMutations';
import ErrorMessage from '../../components/ErrorMessage';

const Navbar = () => {
  const { data, loading, error } = useQuery(ME);
  const [signOut] = useMutation(SIGN_OUT);
  if (loading) return null;
  if (error) return <ErrorMessage />;

  const handleLogout = () => signOut({ refetchQueries: [{ query: ME }] });

  const isAuth = !!data.me;

  return (
    <nav>
      {data.me && <User user={{ ...data.me }} />}
      <Link href='/sell'>
        <a>Sells | </a>
      </Link>
      {!isAuth && (
        <>
          <Link href='/signup'>
            <a>Sign Up | </a>
          </Link>
          <Link href='/signin'>
            <a>Sign In</a>
          </Link>
        </>
      )}
      {isAuth && <p onClick={handleLogout}>Sign out</p>}
    </nav>
  );
};

export default memo(Navbar);
