import s from './Logo.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt={'logo'} className={s.logo} width={117} height={28} />
    </Link>
  );
};

export default Logo;
