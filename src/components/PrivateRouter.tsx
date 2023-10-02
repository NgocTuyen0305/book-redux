import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hook";

const PrivateRouter = () => {
  const {isAuth} = useAppSelector((state)=> state.Authentication)
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth]);
  return isAuth ? <Outlet /> : <Navigate to={"/signin"} />;
};
export default PrivateRouter