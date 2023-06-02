import s from './RegisterForm.module.css';
import CustomInput from 'components/CustomInput/CustomInput';
import AuthLink from '../AuthLink/AuthLink';
import CustomButton from 'components/CustomButton/CustomButton';
import useForm from 'services/hooks/useForm';
import CustomCheckBox from 'components/CustomCheckBox/CustomCheckBox';
import EyeButton from '../EyeButton/EyeButton';
import { useState } from 'react';

const initialState = { name: '', lastName: '', email: '', password: '', termsOfService: false };

const RegisterForm = ({ onSubmitClick }) => {
  const { state, errorsState, handleChange, handleSubmit } = useForm({
    onSubmitClick,
    initialState,
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  console.log('isShowPassword: ', isShowPassword);
  const { name, lastName, email, password, termsOfService } = state;
  const isDisabled =
    !termsOfService ||
    !name ||
    !lastName ||
    !email ||
    !password ||
    errorsState.name ||
    errorsState.lastName ||
    errorsState.email ||
    errorsState.password;

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.nameBlock}>
        <CustomInput name="name" value={name} handleChange={handleChange} placeholder="Name" min="2" />
        <CustomInput name="lastName" value={lastName} handleChange={handleChange} placeholder="Second Name" min="2" />
      </div>
      <CustomInput
        name="email"
        value={email}
        handleChange={handleChange}
        placeholder="name@company.com"
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
        marginBottom="24px"
        icon={<EyeButton isOpened={isShowPassword} onClick={() => {setIsShowPassword(!isShowPassword)}}/>}
      />
      <CustomCheckBox
        marginBottom="48px"
        name="termsOfService"
        checked={termsOfService}
        label="Yes, I understand and agree to the rendersee Terms of Service"
        handleChange={handleChange}
      />
      <CustomButton title="Create account" disabled={isDisabled} />
      <AuthLink to="/login" text="Already have an account?" span="Login" />
    </form>
  );
};

export default RegisterForm;
