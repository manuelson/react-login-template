import { useEffect, useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';
import LogoutButton from 'src/components/LogoutButton';

const LoginPage = () => {

  /* useState hooks */
  const [email, setEmail] = useState<string | null>('');
  const [password, setPassword] = useState<string | null>('');
  const [error, setError] = useState<string | null>(null);
  /* end useState hooks */

  const { login, user } = useAuth();

  const handleLogin = () => {
    setError(null)
    login({
      email: email,
      password: password,
    }, setError);
  };

  useEffect(() => {
    console.log(user)
  }, [user]);

  if (user) {
    return (
      <>
        <div>Logged in as {user.email}</div>
        <LogoutButton />
      </>
    )
  } else {
    return (

      <div>
        <h1>Login</h1>
        {error && <div>{error}</div>}
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
      </div>
    )
  }
}

export default LoginPage;
