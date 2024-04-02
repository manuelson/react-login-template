import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h4 className={"d-flex align-items-center align-self-center"}>Error page |  <Link to={"/"}>Go back</Link></h4>
    </>
  );
};

export default ErrorPage;
