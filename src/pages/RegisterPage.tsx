import { useEffect, useState } from 'react'
import Loader from 'src/components/Loader'
import { useNavigate } from "react-router-dom"
import { User } from 'src/compiler/types'
import { AxiosError } from 'axios'
import { useRegister } from 'src/hooks/useRegister'
import { Alert, Button, Label, TextInput } from 'flowbite-react'

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

  const { register, setUserToLogin } = useRegister()
  const navigate = useNavigate()

  const handleSubmit = async (event:  any) => {
    event.preventDefault()
    setLoading(true)
    setError(null)
    try {
      let user: User = await register(formData)
      setUserToLogin(user)
      setSuccessMessage('User registered successfully')
    } catch (error : AxiosError | any) {
      console.error(error)
      if (error.response && error.response.data.message) {
        setError(error.response.data.message)
      } else {
        setError(error.message)
      }
    } finally {
      setLoading(false)
    }
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
      {error && <Alert color={"failure"}>{error}</Alert>}
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="firstname" value="Your firstname" />
          </div>
          <TextInput id="firstname" name="firstname" type="text" onChange={handleInputChange} required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="lastname" value="Your lastname" />
          </div>
          <TextInput id="lastname" name="lastname" type="text" onChange={handleInputChange} required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" name={"email"} type="email" onChange={handleInputChange} required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" name={"password"} type="password" onChange={handleInputChange} required />
        </div>
        <Button type="submit">{loading && <Loader />}Register</Button>
      </form>
    </>
  )
}

export default RegisterPage;
