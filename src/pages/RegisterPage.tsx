import { useEffect, useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';
import Loader from 'src/components/Loader';
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { User } from 'src/compiler/types';
import { AxiosError } from 'axios';

const RegisterPage = () => {

  /* useState hooks */
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<User>({
      firstname: '',
      lastname: '',
      email: '',
      token: ''
  })
  /* end useState hooks */

  const { register, setUserToLogin } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (event:  any) => {
    event.preventDefault(); // Prevents default form submission behavior
    setLoading(true)
    setError(null)
    try {
      let user: User = await register(formData)
      setUserToLogin(user)
      setSuccessMessage('User registered successfully')
    } catch (error : AxiosError | any) {
      console.error(error)
      if (error.response) {
        setError(error.response.data.message)
      } else {
        setError(error.message)
      }
    } finally {
      setLoading(false);
    }
    setLoading(false)
  }

  const handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  useEffect(() => {
    if (successMessage) {
      navigate('/', { state: { successMessage } });
    }
  }, [successMessage]);

  return (
    <>
      <section className="mb-4">
        <h1>Login</h1>
      </section>
      {error && <Alert variant={"danger"}>{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control name={"firstname"} id={"firstname"} onChange={handleInputChange} type="text"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control name={"lastname"} id={"lastname"} onChange={handleInputChange} type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control name={"email"} id={"email"} onChange={handleInputChange} type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control name={"password"} id={"password"} onChange={handleInputChange} type="password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          {loading && <Loader />}Register
        </Button>
      </Form>
    </>
  )
}

export default RegisterPage;
