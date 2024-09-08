import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      {navigation.state === "loading" ? <Spinner loading /> : <Outlet />}
    </>
  );
};

export default MainLayout;
