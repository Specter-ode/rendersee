import s from './CustomButton.module.css';

const CustomButton = ({
  title,
  disabled = false,
  type = 'submit',
  width = '100%',
  onClick,
  marginTop,
  marginBottom,
}) => {
  return (
    <button
      className={s.btn}
      disabled={disabled}
      type={type}
      style={{ width, marginTop, marginBottom, cursor: disabled ? 'auto' : 'pointer' }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
