import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "src/hooks/useAuth";
import { Alert } from "flowbite-react";

const HomePage = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(
    !!location.state?.successMessage
  );
  const successMessage = location.state?.successMessage;

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
        if (location.state?.successMessage) {
          navigate(".", { state: undefined });
        }
      };
    }
  }, [showSuccessMessage, navigate, location]);

  return (
    <>
      {successMessage && <Alert color="success">{successMessage}</Alert>}
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:z-10 text-gray-600">
        <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="sm:text-4xl text-2xl font-bold mb-6	">
            Hello {user?.firstname}!
          </h2>
          <p className="text-lg text-center text-gray-500">
            This a simple React Login App with Tailwind CSS
          </p>
          {!user && (
            <div className="flex space-x-4">
              <Link
                to={"register"}
                className="mt-8 bg-transparent text-gray-500 text-base font-semibold py-2.5 px-6 border-2 border-gray rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
              >
                Create an account
              </Link>
              <Link
              to={"login"}
              className="mt-8 bg-transparent text-gray-500 text-base font-semibold py-2.5 px-6 border-2 border-gray rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
            >
              Sign in
            </Link>
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
