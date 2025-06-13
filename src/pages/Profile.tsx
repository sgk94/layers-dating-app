import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';


export default function Chat() {
const { user, loading } = useAuth();

if (loading) return <p>Loading...</p>;

if (!user) return <Navigate to="/auth" />;

  return (
    <h1>Profile</h1>
  )
}
