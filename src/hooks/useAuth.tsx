import { useEffect } from "react"
import { useUser } from "src/hooks/useUser"
import { useLocalStorage } from "src/hooks/useLocalStorage"
import axios from 'axios'
import { Response, LoginRequest } from "src/compiler/types"
import { transformers } from "src/helpers/transformers"

export const useAuth = () => {
  const { user, addUser, removeUser, setUser } = useUser()
  const { getItem } = useLocalStorage()
  const { transformUserResponse } = transformers()

  useEffect(() => {
    const storedUser = getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (user: LoginRequest, setError: Function) : Promise<void> => {
    await axios.post<Response>(`${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/login`, {
      email: user.email,
      password: user.password
    })
    .then(response => {
        addUser(transformUserResponse(response.data))
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
