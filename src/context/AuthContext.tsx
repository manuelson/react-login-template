import { createContext } from "react";
import { User } from "src/compiler/types";
import { useState } from "react";
import { useLocalStorage } from "src/hooks/useLocalStorage";

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
});

const Provider = ({children}: any) => {
  const { getItem } = useLocalStorage();
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  })

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

const AuthProvider = {Provider, Consumer: AuthContext.Consumer};

export default AuthProvider;
