import { useEffect, useState } from 'react'
import { useAuth } from 'src/hooks/useAuth'
import Loader from 'src/components/Loader'
import {
  Button,
  Label,
  TextInput,
  Alert
} from "flowbite-react"
import { useNavigate } from "react-router-dom"

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
  }, [user])

  return (
    <>
      {error && (
        <Alert color={"failure"}>{error}</Alert>
      )}
      <div className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" onChange={(e) => setPassword(e.target.value)}  required />
        </div>

        <Button type="submit" onClick={handleLogin}>
        {loading && <Loader />}Login
        </Button>
      </div>
    </>
  )
}

export default LoginPage;
