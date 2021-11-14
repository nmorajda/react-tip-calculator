import { FaDollarSign } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

function InputField({ id, label, message, icon, value, onChange }) {
  return (
    <div className={value === 0 ? 'field is-error' : 'field'}>
      <div className="field__info">
        <label htmlFor={id} className="field__label">
          {label}
        </label>
        <span className="field__message">{message}</span>
      </div>
      <div className="field__input-icon">
        <input
          type="number"
          className="field__input"
          id={id}
          placeholder="0"
          value={value}
          onChange={onChange}
        />
        <div className="field__icon">
          {id === 'inpBill' ? <FaDollarSign /> : <FaUser />}
        </div>
      </div>
    </div>
  );
}

export default InputField;
