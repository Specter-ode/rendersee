import Logo from 'components/Logo/Logo';
import s from './AuthLayout.module.css';

import AuthImage from 'modules/Auth/AuthImage/AuthImage';
import AuthGoogle from '../AuthGoogle/AuthGoogle';

const AuthLayout = ({ children, title, subTitle }) => {
  return (
    <main className={s.main}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.block}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.subTitle}>{subTitle}</p>
        <AuthGoogle />
        <div className={s.dividingField}>
          <span className={s.dividingFieldText}>or</span>
        </div>
        {children}
      </div>
      <AuthImage />
    </main>
  );
};

export default AuthLayout;
