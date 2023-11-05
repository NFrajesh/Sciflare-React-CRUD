import { PacmanLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <PacmanLoader color="blue" />
    </div>
  );
};
export default Loading;
