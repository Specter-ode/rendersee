import CustomInput from 'components/CustomInput/CustomInput';
import AuthLink from '../AuthLink/AuthLink';
import CustomButton from 'components/CustomButton/CustomButton';
import useForm from 'services/hooks/useForm';

import { useState } from 'react';
import EyeButton from '../EyeButton/EyeButton';

const initialState = { email: '', password: '' };




const LoginForm = ({ onSubmitClick }) => {
  const { state, errorsState, handleChange, handleSubmit } = useForm({
    onSubmitClick,
    initialState,
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { email, password } = state;
  const isDisabled = !email || !password || errorsState.email || errorsState.password;

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        name="email"
        value={email}
        handleChange={handleChange}
        placeholder="Enter your email"
        type="email"
        pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        marginBottom="24px"
      />
      <CustomInput
        name="password"
        value={password}
        handleChange={handleChange}
        placeholder="Enter your password"
        min="8"
        type={isShowPassword ? 'text' : 'password'}
        marginBottom="48px"
        icon={<EyeButton isOpened={isShowPassword} onClick={() => {setIsShowPassword(!isShowPassword)}}/>}
      />

      <CustomButton title="Login" disabled={isDisabled} />
      <AuthLink to="/sign-up" text="No account?" span="Register for access" />
    </form>
  );
};

export default LoginForm;
