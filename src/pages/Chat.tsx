import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function Chat() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/auth" />;

  return (
    <h1>
      <div>Welcome, {user.email}</div>
    </h1>
  );
}
