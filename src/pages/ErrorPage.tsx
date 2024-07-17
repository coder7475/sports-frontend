import ErrorButton from "@/components/buttons/ErrorButton/ErrorButton";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col gap-5 justify-center items-center h-screen"
    >
      <h1 className="text-5xl text-center font-black">Oops!</h1>
      <p className="text-center text-xl font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
      <ErrorButton />
    </div>
  );
};

export default ErrorPage;
