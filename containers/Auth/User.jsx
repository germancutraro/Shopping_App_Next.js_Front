import { useQuery } from '@apollo/react-hooks';
import { ME } from './authQueries';
import ErrorMessage from '../../components/ErrorMessage';

const User = () => {
  const { data, loading, error } = useQuery(ME);
  if (loading) return null;
  if (error) return <ErrorMessage />;
  return (
    <div>
      <p>user: {data.me.name}</p>
    </div>
  );
};

export default User;
