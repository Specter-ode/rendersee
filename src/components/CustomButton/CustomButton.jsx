import s from './CustomButton.module.css';

const CustomButton = ({
  title,
  disabled = false,
  type = 'submit',
  width = '100%',
  height,
  padding = 0,
  onClick,
  marginTop,
  marginBottom,
}) => {
  return (
    <button
      className={s.btn}
      disabled={disabled}
      type={type}
      style={{ padding, width, height, marginTop, marginBottom, cursor: disabled ? 'auto' : 'pointer' }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
