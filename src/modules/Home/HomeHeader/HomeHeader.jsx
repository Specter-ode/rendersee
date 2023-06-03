import Logo from 'components/Logo/Logo';
import s from './HomeHeader.module.css';
import { links } from './links';
import CustomLink from 'components/CustomLink/CustomLink';

const HomeHeader = () => {
  return (
    <div className={s.container}>
      <Logo />
      <nav>
        <ul className={s.list}>
          {links.map(({ id, to, text, painted }) => (
            <li key={id}>
              <CustomLink to={to} text={text} painted={painted} padding='8px 16px' fontSize='14px' fontWeight='600' />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HomeHeader;
