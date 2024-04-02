import { useContext } from "react";
import { User } from "src/compiler/types";
import { AuthContext } from "src/context/AuthContext";
import { useLocalStorage } from "src/hooks/useLocalStorage";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: User): void => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = (): void => {
    setUser(null);
    setItem("user", "");
  };

  return { user, addUser, removeUser, setUser };
};
