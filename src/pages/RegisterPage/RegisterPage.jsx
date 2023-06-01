import AuthLayout from 'modules/Auth/AuthLayout/AuthLayout';
import RegisterForm from 'modules/Auth/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/auth-operations';


const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async data => {
    const { name, lastName, email, password } = data;
    const res = await dispatch(register({ name, lastName, email, password }));
    if(res?.payload) {
      navigate('/login');
    }
  };

  return (
    <AuthLayout title="Create an account" subTitle="Please enter your contact details to connect.">
      <RegisterForm onSubmitClick={handleRegister} />
    </AuthLayout>
  );
};

export default RegisterPage;
