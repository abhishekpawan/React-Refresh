import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      {navigation.state === "loading" ? <Spinner loading /> : <Outlet />}
      <ToastContainer/>
    </>
  );
};

export default MainLayout;
