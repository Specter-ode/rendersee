import AuthLayout from 'modules/Auth/AuthLayout/AuthLayout';
import LoginForm from 'modules/Auth/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (userData) => {
    dispatch(login(userData));

  };
  return (
    <AuthLayout title="Login to the account" subTitle="Please enter your contact details to connect.">
      <LoginForm onSubmitClick={handleLogin} />
    </AuthLayout>
  );
};

export default LoginPage;
