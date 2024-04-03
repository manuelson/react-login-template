import { useEffect, useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';
import Loader from 'src/components/Loader';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  /* useState hooks */
  const [email, setEmail] = useState<string | null>('')
  const [password, setPassword] = useState<string | null>('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  /* end useState hooks */

  const { login, user } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    setError(null)
    setLoading(true)
    login({
      email: email,
      password: password,
    }, setError)
    setLoading(false)
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    console.log(user)
  }, [user])

  return (
    <>
      <section className="mb-4">
        <h1>Login</h1>
      </section>
      {error && <div>{error}</div>}
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        {loading && <Loader />}Submit
      </Button>
    </>
  )
}

export default LoginPage;
