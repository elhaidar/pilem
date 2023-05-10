import { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { Context } from "../components/context/Context";

// eslint-disable-next-line react/prop-types
const ErrorPage = () => {
  const error = useRouteError();
  const { fetchError } = useContext(Context);
  return (
    <div className="flex flex-col justify-center items-center h-screen px-6 text-center">
      <p className="text-3xl font-heading text-sky-500">Oops...</p>
      <p className="text-xl">
        {error ? error.message || error.statusText : fetchError && fetchError}
      </p>
    </div>
  );
};

export default ErrorPage;
