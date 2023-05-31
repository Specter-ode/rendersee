import Logo from 'components/Logo/Logo';
import s from './AuthPage.module.css';
import { ReactComponent as GoogleIcon } from '../../assets/icons/google.svg';
import { Link } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const AuthPage = () => {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <Logo />
        <h1>Create an account</h1>
        <p>Please enter your contact details to connect.</p>
        <button className={s.socialBtn} onClick={() => {}}>
          <GoogleIcon className={s.googleIcon} />
          <span className={s.span}>Continue with Google</span>
        </button>
        <RegisterForm />
        <Link href="/">Already have an account? Login</Link>
      </div>
    </main>
  );
};

export default AuthPage;
