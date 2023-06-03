import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { accessToken, user } = useSelector(state => state.auth);
  const isLogin = accessToken && user.id;

  return <>{isLogin ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;
