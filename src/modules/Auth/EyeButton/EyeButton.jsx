import s from './EyeButton.module.css';
import { ReactComponent as EyeOpenedIcon } from 'assets/icons/eye-opened.svg';
import { ReactComponent as EyeClosedIcon } from 'assets/icons/eye-closed.svg';

const EyeButton = ({ isOpened, onClick }) => (
  <button className={s.button} type='button' onClick={onClick} aria-label={isOpened ? "close password visible" : "open password visible"}>
    {isOpened ? <EyeOpenedIcon className={s.icon} /> : <EyeClosedIcon className={s.icon} />}
  </button>
);

export default EyeButton;
