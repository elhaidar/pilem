import { useContext } from "react";
import { Context } from "../components/context/Context";
import Loading from "./Loading";
import ErrorPage from "./404";
import Home from "../components/elements/Home/Home";

const HomePage = () => {
  const { isLoading, fetchError } = useContext(Context);

  return (
    <>
      {isLoading && <Loading />}
      {fetchError && <ErrorPage />}
      {!fetchError && !isLoading && <Home />}
    </>
  );
};

export default HomePage;
