import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
  const { accessToken, user } = useSelector(state => state.auth);
  const isLogin = accessToken && user.id;

  return <>{isLogin ? <Navigate to="/" /> : <Outlet />}</>;
};

export default PublicRoute;
