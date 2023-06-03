import s from './AuthGoogle.module.css';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
const { REACT_APP_BACKEND_URL } = process.env;

const AuthGoogle = () => {

  return (
    <div className={s.imageBlock}>
      <a
        href={`${REACT_APP_BACKEND_URL}/api/users/google`}
        className={s.socialBtn}
        aria-label="Authorization with Google Account"
      >
        <GoogleIcon className={s.socialIcon} />
        <span className={s.socialText}>Continue with Google</span>
      </a>
    </div>
  );
};

export default AuthGoogle;
