import { Outlet } from "react-router-dom";
import Header from "../components/header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="mt-10">
        <Outlet />
      </div>
    </>
  );
};
export default MainLayout;
