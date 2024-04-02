import { useAuth } from 'src/hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();

  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
