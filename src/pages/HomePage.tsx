import LogoutButton from "src/components/LogoutButton";
import { useAuth } from "src/hooks/useAuth";

const HomePage = () => {

  const { user } = useAuth();


  return (
    <>
      <h1>Hello {user?.firstname}</h1>
      <LogoutButton />
    </>
  );
};

export default HomePage;
