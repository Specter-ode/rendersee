import s from './CustomCheckBox.module.css';
import { ReactComponent as CheckedIcon } from 'assets/icons/checked.svg';
import { ReactComponent as UncheckedIcon } from 'assets/icons/unchecked.svg';

const CustomCheckBox = ({
  marginBottom = 0,
  name,
  checked,
  required = true,
  handleChange,
  label,
}) => {
  return (
    <label htmlFor={name} className={s.inputBlock} style={{ marginBottom }}>
      {checked ? <CheckedIcon className={s.icon} /> : <UncheckedIcon className={s.icon} />}
      <input
        id={name}
        className={s.input}
        name={name}
        checked={checked}
        onChange={handleChange}
        required={required}
        type='checkbox'
      />
      {label && <span className={s.label}>{label}</span>}
    </label>
  );
};

export default CustomCheckBox;
