import { Spinner } from "flowbite-react";

const Loader = () => {
  return (
    <Spinner size="sm">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
};

export default Loader;
