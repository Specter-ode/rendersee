import s from './AuthLink.module.css';
import { Link } from 'react-router-dom';

const AuthLink = ({ to, text, span }) => {
  return (
    <Link to={to} className={s.link}>
      <p className={s.text}>
        {text} <span className={s.span}>{span}</span>
      </p>
    </Link>
  );
};

export default AuthLink;
