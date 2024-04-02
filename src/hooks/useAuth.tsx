import { useEffect } from "react"
import { useUser } from "src/hooks/useUser"
import { useLocalStorage } from "src/hooks/useLocalStorage"
import axios from 'axios'
import { Response, LoginRequest } from "src/compiler/types"

export const useAuth = () => {
  const { user, addUser, removeUser, setUser } = useUser()
  const { getItem } = useLocalStorage()

  useEffect(() => {
    const storedUser = getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (user: LoginRequest, setError: any) : Promise<any> => {

    await axios.post<Response, any>(`${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/login`, {
      email: user.email,
      password: user.password
    })
    .then(response => {
        addUser(response.data.data);
    })
    .catch(error => {
      // Handle the error response
      console.error(error)
      setError(error.response.data.message)
    })
  }

  const logout = () : void => {
    removeUser();
  }

  return { user, login, logout, setUser }
};
