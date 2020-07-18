import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import '../styles.scss';

const InputText: FunctionComponent<InputTextInterface> = ({
  type,
  label,
  id,
  required,
  value,
  onChange,
  valid,
  validate,
}) => {
  return (
    <div
      className={classNames(
        'c-form_field c-form_field-text',
        valid ? 'is-valid' : validate ? 'is-error' : null
      )}
    >
      <input
        id={id}
        type={type}
        autoComplete={id}
        aria-required={required}
        aria-invalid="false"
        required={required}
        value={value}
        onChange={onChange}
        aria-label={label}
      />
      <label htmlFor={id} aria-hidden="true">
        {label}
      </label>
    </div>
  );
};

export default InputText;

interface InputTextInterface {
  type: string;
  label: string;
  id: string;
  required: boolean;
  value: string;
  onChange: any;
  valid: any;
  validate: boolean;
}
