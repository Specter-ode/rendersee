import s from './CustomLink.module.css';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, painted, text, padding, fontSize, fontWeight}) => {
  return (
    <Link className={`${s.link} ${painted ? s.painted : s.transparent}`} to={to} style={{ padding, fontSize, fontWeight }}>
      {text}
    </Link>
  );
};

export default CustomLink;
