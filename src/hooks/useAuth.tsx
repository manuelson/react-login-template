import { useEffect } from "react";
import { useUser } from "src/hooks/useUser";
import { useLocalStorage } from "src/hooks/useLocalStorage";

export const useAuth = () => {
  const { user, addUser, removeUser, setUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const storedUser = getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (user: object) => {
    await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "error") {
          alert(data.message);
        } else {
          addUser(data.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const logout = () : void => {
    removeUser();
  };

  return { user, login, logout, setUser };
};
