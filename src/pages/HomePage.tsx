import LogoutButton from "src/components/LogoutButton";
import { useAuth } from "src/hooks/useAuth";

const HomePage = () => {

  const { user } = useAuth();


  return (
    <div>
      <h1>Hello {user?.firstname}</h1>
      <LogoutButton />
    </div>
  );
};

export default HomePage;
