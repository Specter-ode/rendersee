import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useSearchParams} from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import PageLoader from 'components/PageLoader/PageLoader';
import { useDispatch } from 'react-redux';
import { socialAuth } from 'redux/auth/auth-slice';

const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

const App = () => {

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams();
  const accessTokenFromURL = searchParams.get('accessToken');
  const refreshTokenFromURL = searchParams.get('refreshToken');
  const userFromURL = searchParams.get('refreshToken');

  useEffect(() => {
    console.log('refreshTokenFromURL: ', refreshTokenFromURL);
    console.log('accessTokenFromURL: ', accessTokenFromURL);
    console.log('JSON.parse(userFromURL): ', JSON.parse(userFromURL));
    if (accessTokenFromURL && refreshTokenFromURL && userFromURL) {
      dispatch(
        socialAuth({ accessToken: accessTokenFromURL, refreshToken: refreshTokenFromURL, user: JSON.parse(userFromURL)})
      );
    }
  }, [accessTokenFromURL, refreshTokenFromURL, userFromURL, dispatch]);




  return (
    <div>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<RegisterPage />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2000} hideProgressBar position="top-center" theme="colored" transition={Zoom} />
    </div>
  );
};

export default App;
