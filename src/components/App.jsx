import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import PageLoader from 'components/PageLoader/PageLoader';
import { useDispatch } from 'react-redux';
import { socialAuth } from 'redux/auth/auth-slice';
import PublicRoute from './Routes/PublicRoutes';
import PrivateRoute from './Routes/PrivateRoutes';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

const App = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const accessTokenFromURL = searchParams.get('accessToken');
  const refreshTokenFromURL = searchParams.get('refreshToken');
  const userFromURL = searchParams.get('refreshToken');

  useEffect(() => {
    if (accessTokenFromURL && refreshTokenFromURL && userFromURL) {
      dispatch(
        socialAuth({
          accessToken: accessTokenFromURL,
          refreshToken: refreshTokenFromURL,
          user: JSON.parse(userFromURL),
        })
      );
    }
  }, [accessTokenFromURL, refreshTokenFromURL, userFromURL, dispatch]);

  return (
    <div>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<PublicRoute />}>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          {/* <Route element={<PrivateRoute />}></Route> */}
          <Route path="*" element={<HomePage />} />
        </Routes>

       
      </Suspense>
      <ToastContainer autoClose={2000} hideProgressBar position="top-center" theme="colored" transition={Zoom} />
    </div>
  );
};

export default App;
