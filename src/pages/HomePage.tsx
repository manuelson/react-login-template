import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "src/hooks/useAuth";

const HomePage = () => {

  const { user } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(!!location.state?.successMessage);
  const successMessage = location.state?.successMessage;

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
        if (location.state?.successMessage) {
          navigate('.', { state: undefined });
        }
      };
    }
  }, [showSuccessMessage, navigate, location]);

  return (
    <>
      {successMessage && <Alert variant={"success"}>{successMessage}</Alert>}
      <h1>Hello {user?.firstname}</h1>
    </>
  );
};

export default HomePage
